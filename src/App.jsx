import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Main />
      </div>
      <Toaster />
    </>
  );
}

export default App;
