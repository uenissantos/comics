import {  QueryClientProvider} from 'react-query'
import { Routers } from './router/Router'
import { queryClient } from './services/queryClient'
import { BrowserRouter } from 'react-router-dom'
function App() {
  
  return (




<QueryClientProvider client={queryClient}   >

    <BrowserRouter>

    
  <Routers/>


</BrowserRouter>



   </QueryClientProvider>


 
  )
}

export default App
