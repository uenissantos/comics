import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { GlobalStyles } from './theme/globalStyles'
import { theme } from './theme/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


      <ThemeProvider theme={theme}>
<GlobalStyles/>
    <App />
    </ThemeProvider>




    
  </React.StrictMode>,


)
