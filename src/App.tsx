import { ThemeProvider } from 'styled-components'
import { Router } from './pages/Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { CycleContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
