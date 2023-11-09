import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogData, PostType} from "./index";


type AppPropsType = {
    state: {
        dialogsData: DialogData[];
        postData: PostType[]
    }
}

function App(props: AppPropsType) {
    
    const {dialogsData, postData} = props.state
    
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={'content'}>
                    
                    <Route exact path={'/profile'} render={() => <Profile postData={postData}/>}/>
                    <Route path={'/message'} render={() => <Dialogs dialogsData={dialogsData}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                
                </div>
            </div>
        
        </BrowserRouter>
    );
}

export default App;
