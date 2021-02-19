import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import Router from "./Router";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="app-content">
          <Router postsData={props.postsData} messageData={props.messageData} messageListData={props.messageListData}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
