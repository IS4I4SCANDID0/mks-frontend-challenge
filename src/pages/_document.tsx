import { Html, Head, Main, NextScript } from "next/document";
// import { NextFont } from "next/dist/compiled/@next/font";
// import { Montserrat } from "next/font/google";
import { montserrat } from ".";
// const montserrat: NextFont = Montserrat({ 
//   subsets: ["latin"], 
//   weight: ["100","500","600"] 
// });


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