import '../styles/globals.css'
import { theme } from '@closet-design-system/theme-connect';
import { ThemeProvider } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <ThemeProvider theme={ theme }>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
  )
}

export default MyApp
