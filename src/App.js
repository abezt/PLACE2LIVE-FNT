//import logo from './logo.svg';
import './App.css';
import FindTenants from './components/FindTenants.js';
import FindSublets from './components/FindSublets.js';
import FindRoommates from './components/FindRoommates.js';
import Bookmarks from './components/Bookmarks.js';
import Home from './components/Home.js';
import Map from './components/Map.js';
import Messages from './components/Messages.js';
import CreateAccount from './components/CreateAccount';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" exact element={<div id="mapContainer"><Home /></div>} /> 
            <Route path="/messages" exact element={<Messages />} />
            <Route path="/find-tenants" exact element={<FindTenants />} />
            <Route path="/find-roommates" exact element={<FindSublets />} />
            <Route path="/find-sublets" exact element={<FindRoommates />} />
            <Route path="/bookmarks" exact element={<Bookmarks />} />
            <Route path="/map" exact element=
            {<div id="mapContainer">
                <div id="mapClipPath">
                  <Map />
                </div>
              </div>}/>
            <Route path="/createaccount" exact element={<CreateAccount />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
