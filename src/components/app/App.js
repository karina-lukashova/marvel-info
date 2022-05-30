import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

// Оптимизация через динамический импорт НЕ ведёт к уменьшению размера бандла после билда + количество файлов в папке билда возросло. Но дело не в размере, а в способе работы: эти файлы загрузятся пользователю не все сразу, а только тогда, когда соответствующий импорт в коде появится
const MainPage = lazy(() => import('../../pages/MainPage'));
const ComicsPage = lazy(() => import('../../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../../pages/SingleComicPage'));
const Page404 = lazy(() => import('../../pages/404'));

const App = () => {
    

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/marvel-info/" element={<MainPage />} />
                            <Route path="/marvel-info/comics/" element={<ComicsPage />} />
                            <Route path="/marvel-info/comics/:comicId" element={<SingleComicPage />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    ) 
}

export default App;