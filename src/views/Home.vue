<template>
  <vk-grid gutter="collapse">
    <div class="uk-width-1-6 full-height" id="sidebar">
      <h3 class="uk-text-lead uk-text-danger">Alligator</h3>
      <hr>

      <div class="uk-width-1-1@s uk-width-1-1@m">
        <vk-nav style="height:100%">
          <vk-nav-item-parent type="primary" title="Divisions">
            <vk-nav-item-parent href="#" title="Slogan TY">
              <vk-nav-item v-for="(i, index) in ii" :key="index" href="#" title="Sub Item"></vk-nav-item>
            </vk-nav-item-parent>
            <br>
            <vk-nav-item-parent href="#" title="Slogan TY">
              <vk-nav-item href="#" title="Sub Item"></vk-nav-item>
              <vk-nav-item href="#" title="Sub Item"></vk-nav-item>
            </vk-nav-item-parent>
          </vk-nav-item-parent>
        </vk-nav>

        <div style="bottom:0px;">
          <p v-vk-margin>
            <vk-button type="danger" style="border-radius:50%; padding:0px; margin-right:10px">
              <vk-icon icon="world" style="padding:15px;"></vk-icon>
            </vk-button>

            <vk-button type="secondary" style="border-radius:50%; padding:0px;">
              <vk-icon icon="close" style="padding:15px;"></vk-icon>
            </vk-button>
          </p>
        </div>
      </div>
    </div>

    <div class="uk-width-5-6" style="padding-bottom:0px;">
      <drone-map
        class="uk-width-1-1"
        style="height:75%"
        :accessToken="MAPBOX_TOKEN"
        :startLocation="currentLocation"
      ></drone-map>

      <div class="uk-padding-small">
        <!-- <h5 style="margin-bottom:4px;">Available drones</h5> -->
        <vk-grid
          matched
          gutter="small"
          class="uk-width-auto@m uk-flex-center uk-text-center"
          style="margin:0px;"
          id="horizontal-scroll"
        >
          <vk-card
            class="uk-card-hover"
            v-for="(i, index) in [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]"
            :key="index"
            padding="small"
          >
            <img
              width="90"
              height="90"
              src="http://www.pngmart.com/files/6/Drone-Background-PNG.png"
              alt
            >
            <h6 class="uk-text-danger" style="margin-top:5px;">Drone 1</h6>
          </vk-card>
        </vk-grid>
      </div>
    </div>
  </vk-grid>
</template>

<script>
import DroneMap from "@/components/Map";
import LocationAPI from "@/utilities/location";

const MAPBOX_TOKEN = process.env.VUE_APP_MAPBOX_TOKEN;

export default {
  async created() {
    let location = await LocationAPI.currentPosition();
    console.log(location);
    this.currentLocation = [
      location.coords.latitude,
      location.coords.longitude
    ];
    for (var i = 0; i < 10; i++) {
      this.ii.push(i);
    }
  },
  name: "Home",
  components: { DroneMap },
  data() {
    return {
      ii: [],
      currentLocation: [3.1547392, 6.670745600000001],
      MAPBOX_TOKEN
    };
  }
};
</script>

<style lang="scss" scoped>
#horizontal-scroll {
  max-height: 130px;
  overflow: auto !important;
  margin: 0px;
  padding: 0px;
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
