import GlobalStyled from '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyled/>
    </>
    )
}

export default MyApp
