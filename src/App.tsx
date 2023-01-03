import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Header} from "./components/header/Header";
import {ImageCarousel} from "./components/imageCarousel/ImageCarousel";
import {AutoParts} from "./components/autoParts/AutoParts";
import {Footer} from "./components/footer/Footer";
import './App.scss'

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box className={'app'}>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <Header/>
                    <ImageCarousel/>
                    <AutoParts/>
                </Container>
                <Box className={'app__footer'}>
                    <Container maxWidth='lg'>
                        <Footer/>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
