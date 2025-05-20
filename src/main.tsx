import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./config/i18next.ts";
import { SWRConfig } from "swr";
import { localStorageProvider } from "./utils/swrLocalStorageProvider.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SWRConfig value={{ provider: localStorageProvider, revalidateOnFocus: false, revalidateIfStale: false, revalidateOnReconnect: false }}>
            <App />
        </SWRConfig>
    </React.StrictMode>
);
