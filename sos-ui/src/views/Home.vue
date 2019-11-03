<template>
  <div class="home">
    <div class="navbar-verticle">
      <img class="logo" alt="Save Our Space Logo" src="@/assets/logo.png"/>
      <hr>
      <router-link to="/submit"><h3>Report A Fire</h3></router-link>
      <hr>
      <router-link to="/about"><h3>Live Map</h3></router-link>
      <hr>
      <router-link to="/about"><h3>How It Works</h3></router-link>
      <hr>
      <router-link to="/about"><h3>Contact</h3></router-link>
      <hr>
    </div>
    <div class="content">
      <video width="cover" height="cover" autoplay>
        <source src="@/assets/footage.mp4" type="video/mp4">
      </video>
      <div class="overlay">
        <vue-typed-js class="typer" 
          :typeSpeed="50" :backSpeed="50" :loop="false" :fadeOutDelay="200" :autoInsertCss="true" :cursorChar="_" :startDelay="500" :showCursor="true" :strings="['The World Is On Fire','We Need To Work Together','We Need To Save Our Space']">
            <h1 class="typing"></h1>
        </vue-typed-js>
      </div>
      <div>
        <router-link to="/about"><h3 class="delay">Get Started</h3></router-link>
      </div>
    </div>
  </div>
</template>
<script>
document.title="Save Our Space";
import {VueTypedJs} from 'vue-typed-js'

export default {
  name: 'home',
  components:{
    VueTypedJs
  }
}
</script>
<style>

.home {
  background-color: whitesmoke;
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0%;
  left: 0%;
}

.navbar-verticle {
  background-color: #0B4645;
  border-right: 1px solid black;
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 20%;
}

  .navbar-verticle a{
    color: white;
    text-decoration: none;
  }

  .logo {
    width: 100%;
  }

.content {
  position: absolute;
  top: 0%;
  left: 20%;
  width: 80%;
  height: 100%;
  overflow: hidden;

}

.overlay {
  color: white;
  font-size: 2em;
  z-index: 3;
  position: absolute;
  left: 15%;
  top: 30%;
  text-decoration: none;
}

  .delay a, .delay a:hover, .delay a:visited {
    text-decoration: none;
  }

  .delay:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  .delay {
    color: white;
    border: 3px solid white;
    border-radius: 2%;
    padding-top: 5%;
    padding-left: 10%;
    padding-bottom: 5%;
    padding-right: 10%;
    text-decoration: none;
    position: absolute;
    top: 50%;
    left: 35%;
    z-index: 4;
  }

</style>
