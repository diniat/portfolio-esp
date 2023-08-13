import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
  `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
