import './globals.css';
import { Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';
import MetaPixelTracker from '@/components/MetaPixelTracker';
import { SpeedInsights } from '@vercel/speed-insights/next';

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',  // ⚡ Prevent font blocking
});

export const metadata = {
  title: 'Best Gen AI Course in Bangalore - Become an AI Engineer!',
  description:
    ' An Enterprise AI Engineering Program covering Gen AI, Rag, Agentic Workflows, LLMOps / MLOps and MCPs. The ultimate Gen AI course for 2026. Enroll at Bluetick AI Academy!',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ⚡ Critical Resource Preloading */}
        <link rel="preload" href="/img/banner.webp" as="image" type="image/webp" />
        <link rel="preload" href="/img/mobilebanner.webp" as="image" type="image/webp" media="(max-width: 768px)" />

        {/* ⚡ Resource Hints for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* ⚡ Viewport & Performance Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* ======================================================
           ⚡ Google Tag Manager (Deferred for better performance)
        ====================================================== */}
        <Script id="gtm" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WCMHBSGS');
          `}
        </Script>

        {/* ======================================================
           ⚡ Meta Pixel Base (Deferred for better performance)
        ====================================================== */}
        <Script id="fb-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1197413055574069');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} 
            src="https://www.facebook.com/tr?id=1197413055574069&ev=PageView&noscript=1" 
            alt="" />
        </noscript>

        {/* ======================================================
           ⚡ Schema Markup
        ====================================================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BlueTick Academy",
              url: "https://bluetickacademy.com/",
            }),
          }}
        />
      </head>

      <body className={`${sourceSans.variable} antialiased`}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCMHBSGS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* ⚡Meta Pixel Click Tracking */}
        <MetaPixelTracker />

        <SpeedInsights />

        {children}
      </body>
    </html>
  );
}