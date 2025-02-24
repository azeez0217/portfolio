import Navbar from "./components/Navbar";
import Main from "./components/Main";
import {navItems} from '../src/util/data_store'
function App() {
  return (
    <>
  
      <Navbar navItems={navItems}/>
      <div className="overflow-hidden">
        <Main />
      </div>

    </>
  );
}

export default App;
