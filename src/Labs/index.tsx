import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import { Route, Routes, Navigate } from "react-router";
import store from "./store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>
    <div className="container-fluid">
      <h1>Labs</h1>
      <h3>Riqi Huang</h3>
      CS5610.20595.202510
      <div><a href="https://github.com/RickyCUHK/kanbas-react-web-app/tree/master" id="wd-github" target="_blank">Github Repo</a></div>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4" element={<Lab4 />} />
      </Routes>
    </div>
    </Provider>
  );
}
