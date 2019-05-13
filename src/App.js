import React from 'react';
import Header from './Header';
import Footer from './Footer';
import flag from './flag.svg';
import ship from './ship.svg';
import wheel from './wheel.svg';

const App = () => {
  return (
    <div class="App">
      <Header />
      <div class="w75 tc">
        <h1 class="f-subheadline lh-title">Find Your RI Dev Tribe</h1>
      </div>
      <div class="mw9 center ph3-ns">
        <div class="cf ph2-ns">
          <div class="fl w-100 w-third-ns pa2">
            <div class="bg-white pv4 tc">
              <img class="w4" src={ wheel } alt="Wheel"/>
              <p>Awesome people who work on cool projects, just like you.</p>
            </div>
          </div>
          <div class="fl w-100 w-third-ns pa2 tc">
            <div class="bg-white pv4">
              <img class="w4" src={ ship } alt="Ship" />
              <p>Share experiences and collaborate together.</p>
            </div>
          </div>
          <div class="fl w-100 w-third-ns pa2 tc">
            <div class="bg-white pv4">
              <img class="w4" src={ flag } alt="Flag" />
              <p>Join us Saturdays @ 1:30 PM!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;

