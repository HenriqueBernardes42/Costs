import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Home from "./Components/Pages/Home"
import Contact from "./Components/Pages/Contact"
import Company from "./Components/Pages/Company"
import NewProject from "./Components/Pages/NewProject"
import Projects from "./Components/Pages/Projects"

import Footer from "./Components/Layouts/Footer"
import Container from "./Components/Layouts/Container"
import Navbar from "./Components/Layouts/Navbar"

export default function App(){
    return(
        <>
        <Router>
            <Navbar />
            <Container customClass="min-height">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/Company"><Company /></Route>
                    <Route exact path="/Contact"><Contact /></Route>
                    <Route exact path="/Projects"><Projects /></Route>
                    <Route exact path="/NewProjects"><NewProject /></Route>
                </Switch>
            </Container>
            <Footer />
        </Router>
        </>

    )
}