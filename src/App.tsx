import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={'content'}>
                    
                    <Route exact path={'/profile'}
                           render={() => <Profile postData={state.postData}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                  newPostText={state.newPostText}
                           />}/>
                    <Route path={'/message'} render={() => <Dialogs dialogsData={state.dialogsData} dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                
                </div>
            </div>
        
        </BrowserRouter>
    );
}


export default App;
