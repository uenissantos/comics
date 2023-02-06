
import {  Route , Routes} from "react-router-dom"
import { Details } from "../components/details/Details"
import {Home} from '../view/home/home'
import { ComicsCenter } from "../view/home/comics/comicsCenter"
import { Bag } from "../components/bag/Bag"

export const Routers=()=>{


return(



    <Routes>

<Route   element={<Home/>}>
<Route   path="/"  element={ <ComicsCenter/>}  />

<Route  path="/details/:id"  element={<Details/>}/>
    <Route path="/gap"   element={<Bag/>} />

</Route>

</Routes>





)


}