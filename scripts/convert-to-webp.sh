#!/bin/bash

# Image Conversion Script using ImageMagick
# Converts PNG/JPG images to WebP format

echo "🚀 Starting image conversion to WebP..."
echo ""

SOURCE_DIR="public/img"
QUALITY=85
BACKUP=true
TOTAL=0
CONVERTED=0
SKIPPED=0
ORIGINAL_SIZE=0
NEW_SIZE=0

# Create backup directory
if [ "$BACKUP" = true ]; then
    echo "📁 Creating backups..."
    mkdir -p "${SOURCE_DIR}/.backup"
fi

# Function to convert a single image
convert_image() {
    local file="$1"
    local dir=$(dirname "$file")
    local filename=$(basename "$file")
    local ext="${filename##*.}"
    local name="${filename%.*}"
    local webp_file="${dir}/${name}.webp"

    # Skip if already WebP
    if [ "$ext" = "webp" ]; then
        echo "⏭️  Skipped: $file (already WebP)"
        SKIPPED=$((SKIPPED + 1))
        return
    fi

    # Get original size
    if [ -f "$file" ]; then
        local orig_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        ORIGINAL_SIZE=$((ORIGINAL_SIZE + orig_size))

        # Backup original
        if [ "$BACKUP" = true ]; then
            cp "$file" "${dir}/.backup/${filename}"
        fi

        # Convert to WebP
        convert "$file" -quality $QUALITY "$webp_file"

        if [ $? -eq 0 ]; then
            local new_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
            NEW_SIZE=$((NEW_SIZE + new_size))

            local savings=$(awk "BEGIN {printf \"%.1f\", (1 - $new_size / $orig_size) * 100}")
            local orig_kb=$(awk "BEGIN {printf \"%.1f\", $orig_size / 1024}")
            local new_kb=$(awk "BEGIN {printf \"%.1f\", $new_size / 1024}")

            echo "✅ Converted: $file"
            echo "   ${orig_kb}KB → ${new_kb}KB (${savings}% smaller)"
            echo ""

            CONVERTED=$((CONVERTED + 1))
        else
            echo "❌ Failed to convert: $file"
            echo ""
        fi
    fi
}

# Find and convert all PNG and JPG images
while IFS= read -r -d '' file; do
    TOTAL=$((TOTAL + 1))
    convert_image "$file"
done < <(find "$SOURCE_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) ! -path "*/.backup/*" -print0)

# Print summary
echo ""
echo "📊 Conversion Summary:"
echo "✅ Converted: $CONVERTED"
echo "⏭️  Skipped: $SKIPPED"
echo "📋 Total: $TOTAL"

if [ $CONVERTED -gt 0 ]; then
    total_savings=$(awk "BEGIN {printf \"%.1f\", (1 - $NEW_SIZE / $ORIGINAL_SIZE) * 100}")
    orig_mb=$(awk "BEGIN {printf \"%.2f\", $ORIGINAL_SIZE / 1024 / 1024}")
    new_mb=$(awk "BEGIN {printf \"%.2f\", $NEW_SIZE / 1024 / 1024}")
    saved_mb=$(awk "BEGIN {printf \"%.2f\", ($ORIGINAL_SIZE - $NEW_SIZE) / 1024 / 1024}")

    echo ""
    echo "💾 Size Reduction:"
    echo "   Before: ${orig_mb} MB"
    echo "   After: ${new_mb} MB"
    echo "   Saved: ${saved_mb} MB (${total_savings}% reduction)"

    if [ "$BACKUP" = true ]; then
        echo ""
        echo "⚠️  Original files backed up in .backup directories"
        echo "   Review the converted files and delete backups when satisfied:"
        echo "   find public/img -type d -name '.backup' -exec rm -rf {} +"
    fi
fi

echo ""
echo "✨ Done!"
