import GlobalStyled from '../styles/global.style'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyled />
    </>
  )
}

export default MyApp
