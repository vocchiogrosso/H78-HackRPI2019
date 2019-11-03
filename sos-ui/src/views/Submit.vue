<template>
    <div  class="demo">
        <h3>You Have Indicated There Is A Fire Hearby</h3>
        <button onclick="getLocation()"></button>
    </div>
</template>
<script>
export default {
    name:'Submit'
}

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>