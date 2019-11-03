<template>
  <div class="report">
    
  </div>
</template>

<script>
import $ from "jquery";
import mapboxgl from 'mapbox-gl';

export default {
    name:'Submit',
    data(){
      return {
        long:"N/A",
        latt:"N/A",
        sev:"N/A"
      }
    },
    methods: {
      getLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
      },
      showPosition(position){
        console.log(position.coords);
        this.latt = position.coords.latitude;
        this.long = position.coords.longitude;
        this.makeMap();
      },
      makeMap(){
      
        var map = new mapboxgl.Map({
          container: 'map',
          center: [this.long,this.latt],
          zoom: 13,
          style: 'mapbox://styles/mapbox/dark-v10',
           hash: true,
          transformRequest: (url, resourceType)=> {
        if(resourceType === 'Source' && url.startsWith('http://myHost')) {
        return {
          url: url.replace('http', 'https'),
          headers: { 'my-custom-header': true},
          credentials: 'pk.eyJ1Ijoidm9jY2hpb2dyb3NzbyIsImEiOiJjamx5bHBidzIwbTBrM3ZvdmYzenVwYjQ2In0.EWHgW7sU7otZrirNYlliVg'
        }
        }
  }
});
      }
    }
}
</script>
<style scoped>
.report {
  background-color: white;
  position: absolute;
  top: 0%;
  left: 0%;
  min-width: 100%;
  min-height: 100%;
}

.UI {
  background-color: lightslategrey;
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
}

  .Form {
    background-color: red;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 60%;
    height: 100%;
  }

  .Render {
    background-color: gray;
    position: absolute;
    top: 0%;
    left: 60%;
    width: 40%;
    height: 100%;
  }
</style>