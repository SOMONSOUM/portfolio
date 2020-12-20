import { ThemeProvider } from 'styled-components';
import GlobalStyled from '../styles/global.style'
import { theme } from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default MyApp
