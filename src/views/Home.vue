<template>
  <div class="container">
    <div class="container">
      <div class="row">
        <b-card
          v-for="({ title, description, route, btnText, image }, index) in actions"
          :key="index"
          :title="title"
          :img-src="image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mr-2 mb-2"
        >
          <b-card-text>{{ description }}</b-card-text>
          <router-link :to="route">
            <b-button variant="primary">{{ btnText }}</b-button>
          </router-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import DroneA from "../assets/images/drone-1.jpg";
import DroneB from "../assets/images/drone-3.jpg";

export default {
  name: "Home",
  data() {
    return {
      actions: [
        {
          title: "Manage divisions",
          description:
            "The best way to manage swarms is to use a division approach.",
          route: "/division",
          btnText: "Manage",
          image: DroneA
        },
        {
          title: "Issue command",
          description: "Send flight commands to division of choice.",
          route: "/command",
          btnText: "Command",
          image: DroneB
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.card-img-top {
  height: 200px;
}
</style>
