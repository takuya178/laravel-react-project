import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderWrapper from "../components/page/HeaderWrapper";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<HeaderWrapper />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
