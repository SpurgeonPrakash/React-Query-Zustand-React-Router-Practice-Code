import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Retry 3 times for unsuccessfull requests(default 3)
      retry: 3,
      // The data will be cached for 5 minutes(default 5m)
      cacheTime: 300_000, //5m
      // staleTime is when the reactQuery considers the cached data as old data(not fresh data). Here we are setting it to 10s, default is 0s
      staleTime: 10 * 1_000, //10s
      // staledata will be fetched again for fresh data on window focus(default: true)
      refetchOnWindowFocus: false,
      // staledata will be fetched again for fresh data on network reconnection(default: true)
      refetchOnReconnect: false,
      // staledata will be fetched again for fresh data when component mounts(default: true)
      refetchOnMount: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
