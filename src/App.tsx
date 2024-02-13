import Header from './Header'
import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import TableC from './TableC'

function App() {
  
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header/>
      <TableC/>
      
    </ThemeProvider>
    </>
  )
}

export default App
