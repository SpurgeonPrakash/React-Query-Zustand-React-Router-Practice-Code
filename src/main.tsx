import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";
import router from "./routing/routes";

const queryClient = new QueryClient();
// Default options work fine. One thing to change is staleTime, we will set this option per request when we use useQueryHook
// queryClient config object. For all QUeries
//   {
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       cacheTime: 300_000, //5m
//       staleTime: 10 * 1_000, //10s
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       refetchOnMount: false,
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
