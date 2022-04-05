//import logo from './logo.svg';
//import Messages from './components/Messages.js';
import './App.css';
import Home from './components/Home.js';
import FindTenants from './components/FindTenants.js';
import FindSublets from './components/FindSublets.js';
import FindRoommates from './components/FindRoommates.js';
import Bookmarks from './components/Bookmarks.js';
import CreateAccount from './components/CreateAccount';
import Map from './components/Map.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" exact element={
            <section>
              <div class="pageHeader">
                  <div class="header">
                  <h>Home</h>
                  <hr />
                  </div>
                  <div class="userPhoto">
                    <img src="profile.jpg" alt=""/>
                  </div>
                  <div class="post">
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
              <Home />
            </section>} />
            <Route path="/find-tenants" exact element={
            <section>
              <div class="pageHeader">
                  <div class="header">
                  <h>Find Tenants</h>
                  <hr />
                  </div>
                  <div class="userPhoto">
                    <img src="profile.jpg" alt=""/>
                  </div>
                  <div class="post">
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
              <FindTenants />
            </section>} />
            <Route path="/find-roommates" exact element={            
            <section>
              <div class="pageHeader">
                  <div class="header">
                  <h>Find Roommates</h>
                  <hr />
                  </div>
                  <div class="userPhoto">
                    <img src="profile.jpg" alt=""/>
                  </div>
                  <div class="post">
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
              <FindRoommates />
            </section>} />
            <Route path="/find-sublets" exact element={   
            <section>
              <div class="pageHeader">
                  <div class="header">
                  <h>Find Sublets</h>
                  <hr />
                  </div>
                  <div class="userPhoto">
                    <img src="profile.jpg" alt=""/>
                  </div>
                  <div class="post">
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
              <FindSublets />
            </section>} />
            <Route path="/bookmarks" exact element={
            <section>
              <div class="pageHeader">
                <div class="header">
                  <h>Bookmarks</h>
                  <hr />
                </div>
              </div>
                  <Bookmarks />
            </section>} />
            <Route path="/map" exact element=
            {<section>
              <div class="pageHeader">
                  <div class="header">
                  <h>Listings Map</h>
                  <hr />
                  </div>
                  <div class="userPhoto">
                    <img src="profile.jpg" alt=""/> 
                  </div>
                  <div class="post">
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
