import { Html, Head, Main, NextScript } from "next/document";
import { montserrat } from ".";

const Document = () => {
  return (
    <Html lang="pt-br">
      <Head />
      <body className={montserrat.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document