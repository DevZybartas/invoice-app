import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/Home/HomePage";
import InvoiceDetail from "./components/pages/Home/Invoices/InvoiceDetail/InvoiceDetail";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/invoice/:id" element={<InvoiceDetail />}></Route>
        </Routes>
      </Layout>
    </>
  );
};
export default App;
