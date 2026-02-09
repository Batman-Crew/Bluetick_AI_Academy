/**
 * Image Conversion Script
 * Converts PNG/JPG images to WebP format for better performance
 *
 * Usage:
 *   npm install --save-dev sharp
 *   node scripts/convert-images-to-webp.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const CONFIG = {
  sourceDir: path.join(__dirname, '../public/img'),
  quality: 85, // WebP quality (1-100, higher = better quality but larger file)
  skipSVG: true, // Don't convert SVG files (they're already optimized)
  skipWebP: true, // Don't reconvert existing WebP files
  createBackup: true, // Create .backup folder with original files
  dryRun: false, // Set to true to see what would be converted without actually converting
};

// Track statistics
const stats = {
  converted: 0,
  skipped: 0,
  failed: 0,
  originalSize: 0,
  newSize: 0,
};

/**
 * Get all image files recursively
 */
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip backup directories
      if (file !== '.backup') {
        getImageFiles(filePath, fileList);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        fileList.push(filePath);
      } else if (CONFIG.skipSVG && ext === '.svg') {
        // Skip SVG files
      } else if (CONFIG.skipWebP && ext === '.webp') {
        // Skip existing WebP files
      }
    }
  });

  return fileList;
}

/**
 * Convert a single image to WebP
 */
async function convertToWebP(imagePath) {
  try {
    const ext = path.extname(imagePath);
    const newPath = imagePath.replace(ext, '.webp');

    // Skip if already WebP
    if (ext === '.webp') {
      console.log(`⏭️  Skipped: ${path.relative(CONFIG.sourceDir, imagePath)} (already WebP)`);
      stats.skipped++;
      return;
    }

    // Get original file size
    const originalSize = fs.statSync(imagePath).size;
    stats.originalSize += originalSize;

    if (CONFIG.dryRun) {
      console.log(`🔄 Would convert: ${path.relative(CONFIG.sourceDir, imagePath)} → ${path.basename(newPath)}`);
      stats.converted++;
      return;
    }

    // Create backup if configured
    if (CONFIG.createBackup) {
      const backupDir = path.join(path.dirname(imagePath), '.backup');
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      const backupPath = path.join(backupDir, path.basename(imagePath));
      fs.copyFileSync(imagePath, backupPath);
    }

    // Convert to WebP
    await sharp(imagePath)
      .webp({ quality: CONFIG.quality })
      .toFile(newPath);

    // Get new file size
    const newSize = fs.statSync(newPath).size;
    stats.newSize += newSize;

    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    const originalKB = (originalSize / 1024).toFixed(1);
    const newKB = (newSize / 1024).toFixed(1);

    console.log(`✅ Converted: ${path.relative(CONFIG.sourceDir, imagePath)}`);
    console.log(`   ${originalKB}KB → ${newKB}KB (${savings}% smaller)\n`);

    // Optionally delete original
    // fs.unlinkSync(imagePath);

    stats.converted++;
  } catch (error) {
    console.error(`❌ Failed to convert ${imagePath}:`, error.message);
    stats.failed++;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting image conversion to WebP...\n');
  console.log(`📁 Source directory: ${CONFIG.sourceDir}`);
  console.log(`⚙️  Quality: ${CONFIG.quality}`);
  console.log(`💾 Create backup: ${CONFIG.createBackup}`);
  console.log(`🔍 Dry run: ${CONFIG.dryRun}\n`);

  if (!fs.existsSync(CONFIG.sourceDir)) {
    console.error(`❌ Source directory not found: ${CONFIG.sourceDir}`);
    process.exit(1);
  }

  // Get all image files
  const imageFiles = getImageFiles(CONFIG.sourceDir);
  console.log(`📋 Found ${imageFiles.length} images to process\n`);

  if (imageFiles.length === 0) {
    console.log('✨ No images to convert!');
    return;
  }

  // Convert each image
  for (const imagePath of imageFiles) {
    await convertToWebP(imagePath);
  }

  // Print summary
  console.log('\n📊 Conversion Summary:');
  console.log(`✅ Converted: ${stats.converted}`);
  console.log(`⏭️  Skipped: ${stats.skipped}`);
  console.log(`❌ Failed: ${stats.failed}`);

  if (!CONFIG.dryRun && stats.converted > 0) {
    const totalSavings = ((1 - stats.newSize / stats.originalSize) * 100).toFixed(1);
    const originalMB = (stats.originalSize / 1024 / 1024).toFixed(2);
    const newMB = (stats.newSize / 1024 / 1024).toFixed(2);
    const savedMB = (originalMB - newMB).toFixed(2);

    console.log(`\n💾 Size Reduction:`);
    console.log(`   Before: ${originalMB} MB`);
    console.log(`   After: ${newMB} MB`);
    console.log(`   Saved: ${savedMB} MB (${totalSavings}% reduction)`);

    if (CONFIG.createBackup) {
      console.log(`\n⚠️  Original files backed up in .backup directories`);
      console.log(`   Review the converted files and delete backups when satisfied:`);
      console.log(`   find public/img -type d -name ".backup" -exec rm -rf {} +`);
    }
  }

  console.log('\n✨ Done!');
}

// Run the script
main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
