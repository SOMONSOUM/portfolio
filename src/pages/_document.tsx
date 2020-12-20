import React from 'react'
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  // render() {
  //   return (
  //     <Html lang="en">
  //       <Head>
  //         <meta name="viewport"
  //           content="width=device-width, initial-scale=1.0" />
  //         <link
  //           href='https://fonts.googleapis.com/css?family=Lato:400,700%7CPoppins:700&display=swap'
  //           rel='stylesheet'
  //         />
  //       </Head>
  //       <body>
  //         <Main />
  //         <script async src='https://js.stripe.com/v3/' />
  //       </body>
  //     </Html>
  //   )
  // }
}
