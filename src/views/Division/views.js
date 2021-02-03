export const CREATE_DIVISION = "Create division";
export const DELETE_DIVISION = "Delete division";
export const CHANGE_DRONE_DIVISION = "Change drone division";

export default [
  {
    title: CREATE_DIVISION,
    description:
      "Creating a division allows pilots manage drones in a decentralized manner.",
    route: "/division/create",
    active: true,
    fields: {
      divisionName: {
        value: "",
        label: "Division Name",
        type: "text",
        placeholder: "Please enter division name"
      }
    }
  },
  {
    title: DELETE_DIVISION,
    description:
      "Deleting a division will cause all the drones withing that division to be moved to the General division.",
    route: "/division/delete",
    fields: {
      divisionName: {
        value: "",
        label: "Division Name",
        type: "select",
        placeholder: "Please enter division name",
        options: "divisionNames" // value in vuex getters
      }
    }
  },

  {
    title: CHANGE_DRONE_DIVISION,
    description: "Move a drone from one division to another.",
    route: "/division/change",
    fields: {
      from: {
        value: "",
        label: "From",
        type: "select",
        placeholder: "Move from which division",
        options: "divisionNames" // value in vuex getters
      },
      to: {
        value: "",
        label: "To",
        type: "select",
        placeholder: "Move to which division",
        options: "divisionNames" // value in vuex getters
      },
      droneSession: {
        value: "",
        label: "Drone Session",
        type: "select",
        placeholder: "Enter session of drone on the swarm",
        options: "getDivisionSessions",
        fnCall: true
      }
    }
  }
];
