<template>
  <mapbox
    :access-token="accessToken"
    :map-options="{
        style: 'mapbox://styles/mapbox/satellite-streets-v10',
        center: startLocation,
        zoom: 10
      }"
    :geolocate-control="{
        show: true,
        position: 'top-left'
      }"
    :scale-control="{
        show: true,
        position: 'top-left'
      }"
    :fullscreen-control="{
        show: true,
        position: 'top-left'
      }"
  ></mapbox>
</template>

<script>
export default {
  name: "DroneMap",
  props: ["accessToken", "startLocation"]
};
</script>
