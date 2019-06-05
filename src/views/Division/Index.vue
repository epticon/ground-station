<template>
  <div>
    <b-card no-body>
      <b-tabs pills card vertical class="responsive-tab">
        <b-tab
          v-for="({ title, fields, description, route, active }, index) in views"
          :key="`tab_${index}`"
          :title="title"
          :active="active"
        >
          <small class="text-danger">{{ description }}</small>
          <b-form
            class="mt-3"
            @submit="event => sendMessage(event, { title })"
            @reset="() => onReset('')"
          >
            <b-form-group
              v-for="(field, index) in Object.keys(fields)"
              :key="`form_${index}`"
              :id="`input-group-${index}`"
              :label="getViewFields(title, field).label"
              :label-for="`input-${index}`"
            >
              <b-form-select
                v-if="getViewFields(title, field).type == 'select' && getViewFields(title,field).fnCall == true"
                v-model="getViewFields(title, field).value"
                :options="$store.getters[getViewFields(title, field).options](fields['from'].value)"
              ></b-form-select>
              <b-form-select
                v-else-if="getViewFields(title, field).type == 'select'"
                v-model="getViewFields(title, field).value"
                :options="$store.getters[getViewFields(title, field).options]"
              ></b-form-select>

              <b-form-input
                v-else
                :id="`input-${index}`"
                v-model="getViewFields(title, field).value"
                :type="getViewFields(title, field).type"
                required
                :placeholder="getViewFields(title, field).placeholder"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Send</b-button>
          </b-form>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import views, {
  CREATE_DIVISION,
  DELETE_DIVISION,
  CHANGE_DRONE_DIVISION
} from "./views";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      views
    };
  },

  computed: {
    ...mapGetters(["divisionNames", "getDivisionSessions"])
  },

  created() {
    this.$store.dispatch("getAllDivisions");
  },

  methods: {
    getView(title) {
      return this.views.find(x => x.title == title);
    },
    getViewFields(title, field) {
      return this.getView(title).fields[field];
    },
    sendMessage(event, { title }) {
      event.preventDefault();
      this.$socket.sendObj(this.getPayload(title));
      window.location.reload();
    },
    getPayload(title) {
      const { route, fields } = this.getView(title);

      switch (title) {
        case CREATE_DIVISION:
        case DELETE_DIVISION:
          return { route, data: fields.divisionName.value };
        case CHANGE_DRONE_DIVISION:
          return {
            route,
            data: {
              from: fields.from.value,
              to: fields.to.value,
              drone_session: fields.droneSession.value
            }
          };
        default:
          return {};
      }
    }
  }
};
</script>
