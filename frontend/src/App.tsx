import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/Home/HomePage";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </Layout>
      </QueryClientProvider>
    </>
  );
};
export default App;
