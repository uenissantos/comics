
import {  Route , Routes} from "react-router-dom"
import { Details } from "../components/details/Details"
import { Main } from "../components/main/main"
import {Home} from '../view/home/home'
import { Map } from "../view/map/Map"

export const Routers=()=>{


return(

<Routes>

<Route   element={<Home/>}>
<Route  path="/"    element={ <Map/>}  />

<Route  path="/lkl"    element={ <Main/>}  />

<Route  path="/details/:id"  element={<Details/>}/>

</Route>

</Routes>

)


}