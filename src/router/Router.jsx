
import {  Route , Routes} from "react-router-dom"
import { Details } from "../components/details/Details"
import {Home} from '../view/home/home'
import { Map } from "../components/map/Map"
import { ComicsCenter } from "../view/home/comics/comicsCenter"

export const Routers=()=>{


return(



    <Routes>

<Route   element={<Home/>}>
    
<Route  path="/"    element={ <ComicsCenter/>}  />

<Route  path="/details/:id"  element={<Details/>}/>
{/* <Route  path="/map"    element={ <Map/>}  />
 */}
</Route>

</Routes>





)


}