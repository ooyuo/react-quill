import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "@/pages/HomePage";
import CatRoutes from "./CatRoutes";
import ErrorPage from "@/pages/error/ErrorPage";
import React from "react";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import EditorRoutes from "./EditorRoutes";
import GlobalStyles from "@/styles/globalStyle";

const queryClient = new QueryClient();

function AppRoutes() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        ...CatRoutes,
        ...EditorRoutes,
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ];

  let element = useRoutes(routes);

  return <div>{element}</div>;
}

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        <RetryErrorBoundary>
          <BrowserRouter>
            <GlobalStyles />
            <AppRoutes />
          </BrowserRouter>
        </RetryErrorBoundary>
      </QueryErrorResetBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
