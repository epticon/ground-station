<template>
  <b-container fluid id="command">
    <div class="command-form">
      <b-tabs pills card vertical class="command-list">
        <b-tab
          v-for="({ title, fields, description, route, active },index) in views"
          :key="`tab_${index}`"
          :title="title"
          :active="active"
        >
          <b-container>
            <b-row>
              <b-col>
                <h6>{{ title }}</h6>
                <small class="text-danger">{{ description }}</small>
                <hr>
                <b-form
                  class="mt-3"
                  @submit="event => addCommand(event, { title })"
                  @reset="() => onReset(fields)"
                >
                  <b-form-group
                    v-for="(field, index) in Object.keys(fields)"
                    :key="`form_${index}`"
                    :id="`input-group-${index}`"
                    :label="getViewFields(title, field).label"
                    :label-for="`input-${index}`"
                  >
                    <b-form-input
                      :id="`input-${index}`"
                      v-model="getViewFields(title, field).value"
                      :type="getViewFields(title, field).type"
                      step="any"
                      required
                      :placeholder="getViewFields(title, field).placeholder"
                    ></b-form-input>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Add</b-button>
                </b-form>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
      </b-tabs>
    </div>
    <div class="command-added">
      <ul v-if="missionList.length > 0">
        <Draggable v-model="missionList" style="cursor: pointer;">
          <li
            v-for="(mission, index) in missionList"
            :key="index"
            @click="missionList.splice(index,1)"
          >
            <span v-if="typeof mission == 'string'">{{ mission }}</span>
            <span v-else>{{Object.keys(mission)[0]}}</span>
            <br>
            <small
              v-if="typeof mission != 'string'"
            >{{ stringifyFields(mission[Object.keys(mission)[0]]) }}</small>
          </li>
        </Draggable>
      </ul>
      <div v-else>No command yet.</div>

      <div class="mb-3">
        <div class="form-row">
          <b-form-select
            class="form-control form-control-lg"
            size="md"
            v-model="divisionName"
            :options="$store.getters.divisionNames"
          ></b-form-select>
        </div>
        <b-form class="mt-3 form-inline" @submit="pushMissionToSwarm" @reset="clearMissionList">
          <b-form-group class="mt-3" id="input-group-division" label-for="input-division-name">
            <b-button type="submit" class="mr-2" variant="danger">Push to swarm</b-button>
            <b-button type="reset" class variant="warning">Clear</b-button>
          </b-form-group>
        </b-form>
      </div>
    </div>
  </b-container>
</template>

<script>
import views, { ROUTE } from "./views";
import Draggable from "vuedraggable";

export default {
  name: "Command",
  components: { Draggable },
  data() {
    return {
      views,
      divisionName: "",
      missionList: []
    };
  },
  computed: {
    sd() {
      return this.$store.getters.divisionName;
    }
  },
  methods: {
    getView(title) {
      return this.views.find(x => x.title == title);
    },

    getViewFields(title, field) {
      return this.getView(title).fields[field];
    },

    pushMissionToSwarm(event) {
      event.preventDefault();
      console.log(this.missionList);
      this.$socket.sendObj({
        route: ROUTE,
        data: {
          division_name: this.divisionName,
          instruction: {
            mission: this.missionList
          }
        }
      });
    },
    clearMissionList(event) {
      event.preventDefault();
      this.missionList = [];
    },
    addCommand(event, { title }) {
      event.preventDefault();
      let param = this.extractViewfields(title);
      if (Object.keys(param).length == 0) {
        this.missionList.push(title);
        return;
      }
      this.missionList.push({ [title]: param });
    },
    extractViewfields(title) {
      let { fields } = this.getView(title);
      let obj = {};
      Object.keys(fields).map(key => {
        obj[key] = Object.freeze(fields[key].value);
        fields[key].value = "";
      });
      return obj;
    },
    onReset(fields) {
      Object.keys(fields).map(key => {
        fields[key].value = "";
      });
    },
    stringifyFields(fields) {
      let str = "";
      Object.keys(fields).map(key => (str += ` ${key}: ${fields[key]}`));
      return str;
    }
  }
};
</script>
