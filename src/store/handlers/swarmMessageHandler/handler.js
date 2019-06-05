import * as ROUTES from "./routes";
import * as NOTIFICATIONS from "./notificationTypes";

class SwarmMessageHandler {
  handle(msg, { state }) {
    this.state = state;
    let json;

    try {
      json = JSON.parse(msg);
      const { route, ...data } = json;
      this.data = data;
      this.matchRoute(route);
    } catch (err) {
      state.socket.messages.push({ time: Date.now(), msg }); // Is plain message
    }
  }

  matchRoute(route) {
    switch (route) {
      case ROUTES.TELEMETARY:
        return this.telemetary();
      case ROUTES.DIVISIONS:
        return this.divisions();
      case ROUTES.DIVISION_NAMES:
        return this.divisionNames();
      case ROUTES.NOTIFY:
        return this.notify();
      case ROUTES.COMMAND:
      case ROUTES.CREATE_DIVISION:
      case ROUTES.DELETE_DIVISION:
      case ROUTES.CHANGE_DIVISION:
        console.log(`Currently, there is no handler defined for ${route}.`);
        break;
      default:
        console.log(`Route ${route} not defined`);
        break;
    }
  }

  telemetary() {
    // Improve on how the data is sent from the swarm, then parse appriorately.
  }
  divisions() {
    console.log(this.data.response);
    this.state.divisions = this.data.response;
  }
  divisionNames() {
    this.state.divisionNames = this.data.response;
  }
  notify() {
    const {
      notification: { type, content }
    } = this.data;

    switch (type) {
      case NOTIFICATIONS.DRONE_DOWN: {
        this.notifyDroneDown(content);
        break;
      }
      default:
        console.log(
          `Unsupported notification type: ${type} with content ${JSON.stringify(
            content
          )}`
        );
        break;
    }
  }

  notifyDroneDown(content) {
    const { division_name, drones_session } = content;
    drones_session.forEach(session => {
      try {
        delete this.state.divisions[division_name][session];
      } catch (err) {
        console.log(err);
      }
    });
  }
}

export default SwarmMessageHandler;
