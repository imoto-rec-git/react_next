import React from 'react';
//① react-router-domから関係オブジェクトを読み込み
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Page1 } from './components/pages/Page1';
import { Page2 } from './components/pages/Page2';
import { RouterTop } from './components/pages/RouterTop';
import { Page1DetailA } from './components/pages/Page1DetailA';
import { Page1DetailB } from './components/pages/Page1DetailB';
import { CounterPage } from './components/pages/CounterPage';
import { CounterProvider } from './providers/CounterProvider';

function App() {
  console.log('Appコンポ最初');
  return (
    <CounterProvider>
      {/* ② BrouserRouterでコンポーネント全体を囲む][] */}
      <BrowserRouter>
        <div className="App">
          {/*
          ③ RoutesでRouteにマッチしたコンポーネントを表示する
            （react-router v5までは、Switchを使用していた。）
        */}
          <header>
            <nav className="gnav">
              <ul
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                }}
              >
                {/* ⑤ Linkでナビゲーションのパスを記述する。 */}
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/page1">Page1</Link>
                </li>
                <li>
                  <Link to="/page2">Page2</Link>
                </li>
                <li>
                  <Link to="/counter">Counter Page</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
            {/* ④ routeにURLとなるpathと該当するコンポーネントをelementで割り当てる */}
            <Route path="/" element={<RouterTop />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page1/detailA" element={<Page1DetailA />} />
            <Route path="/page1/detailB" element={<Page1DetailB />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/counter" element={<CounterPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CounterProvider>
  );
}

export default App;
