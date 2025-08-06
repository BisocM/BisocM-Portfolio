import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import './i18n';

class Loader extends React.Component {
    render() {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white dark:bg-darkBg">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Suspense fallback={<Loader/>}>
            <div className="min-h-screen">
                <App/>
            </div>
        </Suspense>
    </React.StrictMode>
);