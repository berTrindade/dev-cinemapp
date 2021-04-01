
import { BrowserRouter, Route } from 'react-router-dom'
import Favorites from '../pages/Favorites'
import Home from '../pages/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/favorites" component={Favorites}/>
        </BrowserRouter>
    )
}