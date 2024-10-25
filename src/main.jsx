import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Remove duplicate import
import App from "./App"; // Use consistent extensions for imports
import "./index.css";
import store from "./store"; // Use consistent extensions for imports
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // Correct import

// Create root and render the app
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );
