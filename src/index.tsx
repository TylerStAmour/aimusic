import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/Home';
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import './index.css'
import "@fontsource/raleway";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ParallaxProvider>
        <Container className={"h-screen flex flex-col bg-neutral-900"}>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/impacte"} />
                    <Route path={"/experimente"} />
                    <Route path={"/technologie"} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Container>
    </ParallaxProvider>
)
