import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={'content'}>
                <Dialogs/>
                {/*<Profile/>*/}
            
            </div>
        </div>
    );
}

export default App;
