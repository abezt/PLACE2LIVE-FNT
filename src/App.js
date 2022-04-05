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
            {<section>
              <div class="mapHeader">
                
                  <div class="header">
                  <h>Listings Map</h>
                  <hr />
                  </div>
                  
                  <div class="userPhoto">
                    <img src="profile.jpg"/>
                  </div>
                  <div class="mapPost">
                   <textarea name="paragraph_text" cols="50" rows="10" placeholder="make a new post..."></textarea>
                  </div>
                  <ul class="nav_list">
                    <li><i class='bx bx-image' ></i></li>
                    <li><i class='bx bxs-file-gif' ></i></li>
                    <li><i class='bx bx-bar-chart-alt' ></i></li>  
                    <li><i class='bx bx-smile' ></i></li>
                    <li><i class='bx bx-calendar-alt' ></i></li>
                  </ul>
                  <button class="postBtn">Post</button>
              </div>
              <div id="mapContainer">
                <div id="mapClipPath">
                  <Map />
                </div>
              </div>

              </section>}/>
            <Route path="/createaccount" exact element={<CreateAccount />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
