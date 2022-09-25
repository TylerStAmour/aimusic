import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Experiment from './pages/Experiment';
import Impact from './pages/Impact';
import NotFound from './pages/NotFound';
import Container from "./components/Container";
import './index.css'
import "@fontsource/raleway";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ParallaxProvider>
        <Container className={"h-screen bg-neutral-900"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/impacte"} element={<Impact />}/>
                    <Route path={"/experimente"} element={<Experiment />} />
                    <Route path={"/technologie"} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Container>
    </ParallaxProvider>
)
