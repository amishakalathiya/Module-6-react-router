// import logo from './logo.svg';
 import './App.css';
// import ClassComp from './Component/ClassComp';
// import ConstructerComp from './Component/ConstructerComp';
// import PropsComp from './Component/PropsComp';
// import CompInCom from './Component/CompInCom';
// import LyfCycle from './Component/LyfCycle';
// import UseState from './Component/Hooks/UseState';
// import FunctionComp from './Component/FunctionComp';
// import UseEffect from './Component/Hooks/UseEffect';
// import StateMng from './Component/StateMng';
// import UseReducer from './Component/Hooks/UseReducer';
// import Form from './Component/Form';
// import ConditionRender from './Component/ConditionRender';
// import List from './Component/List';
// import Form1 from './Component/Form1';
// import Assignment3 from './Component/Assignment3';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
 import Header from './Component/Style/Header';
 import Home from './Component/Style/Home';
 import About from './Component/Style/About';
 import Prod from './Component/Style/Prod';
import Contact from './Component/Style/Contact';
import Single from './Component/Style/Single';



//import Products from "./Component/Style/Products";


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Prod />} />
          <Route path="/Contact" element={<Contact />} />
         
        </Routes>
      </BrowserRouter>
    </>
   
    // <Products/>
    // <Home/>
    // <Assignment3/>
    // <Form1/>
    // <List/>
    // <ConditionRender/>
    // <UseReducer/>
    // <Form/>
    // <StateMng/>
    // <UseEffect/>
    // <FunctionComp/>
    //<UseState/>
    // <LyfCycle/>
    // <CompInCom/>
    // <PropsComp/>
    //<ConstructerComp/>
    //<ClassComp/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;
