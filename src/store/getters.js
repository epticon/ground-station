export default {
  divisionNames(state) {
    return Object.keys(state.divisions).map(divisionName => {
      return { value: divisionName, text: divisionName };
    });
  },

  getDivisionSessions(state) {
    return divisionName => {
      console.log(state.divisions[divisionName]);
      if (typeof state.divisions[divisionName] == "undefined") return [];

      return Object.keys(state.divisions[divisionName]).map(session => {
        return { value: session, text: session };
      });
    };
  }
};
