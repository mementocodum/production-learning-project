import React, { Suspense, useContext, useState } from 'react';
import Counter from './counter';
import '../styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from '../pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from '../pages/MainPage/MainPage.lazy';
import { useTheme } from '../theme/useTheme';
import { classNames } from '../helpers/classNames/classNames';

const App = () => {
    const { theme, switchTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={switchTheme}>Change Theme</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageLazy />} />
                    <Route path="/" element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
