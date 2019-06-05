// General
export const CLEAR = "Clear";
export const WAYPOINT = "Waypoint";
export const RETURN_TO_LAUNCH = "ReturnToLaunch";
export const SPLINE_WAYPOINT = "SplineWaypoint";
export const LOITER_UNLIM = "LoiterUnlim";
export const LOITER_TURNS = "LoiterTurns";
export const LOITER_TIME = "LoiterTime";
export const LAND = "Land";
export const TAKEOFF = "Takeoff";
// Condition Commands
export const CONDITION_DELAY = "ConditionDelay";
export const CONDITION_YAW = "ConditionYaw";
export const CONDITION_DISTANCE = "ConditionDistance";
// DO Commands
export const DO_JUMP = "DoJump";
export const DO_SET_MODE = "DoSetMode";
export const DO_CHANGE_SPEED = "DoChangeSpeed";
export const DO_SET_HOME = "DoSetHome";
export const DO_SET_SERVO = "DoSetServo";
export const DO_REPEAT_SERVO = "DoRepeatServo";
export const DO_DIGI_CAM_CONTROL = "DoDigicamControl";
export const DO_DIGI_CAM_CONFIGURE = "DoDigicamConfigure";
export const DO_SET_RELAY = "DoSetRelay";
export const DO_REPEAT_RELAY = "DoRepeatRelay";
export const DO_SET_CAM_TRIGG_DIST = "DoSetCamTriggDist";
export const DO_MOUNT_CONTROL = "DoMountControl";

export const ROUTE = "/command";

export default [
  {
    title: CLEAR,
    description: "Clear all drone commands.",
    fields: {}
  },
  {
    title: RETURN_TO_LAUNCH,
    description: "Return back to launch location.",
    fields: {}
  },
  {
    title: WAYPOINT,
    description: "",
    active: true,
    fields: {
      delay: {
        value: "",
        label: "Delay",
        type: "number",
        placeholder: ""
      },
      yaw_angle: {
        value: "",
        label: "Yaw angle",
        type: "number",
        placeholder: ""
      },
      lat: {
        value: "",
        label: "Latitude",
        type: "number",
        placeholder: ""
      },
      long: {
        value: "",
        label: "Longitude",
        type: "number",
        placeholder: ""
      },
      alt: {
        value: "",
        label: "Altitude",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: SPLINE_WAYPOINT,
    description: "",
    fields: {
      delay: {
        value: "",
        label: "Delay",
        type: "number",
        placeholder: ""
      },
      lat: {
        value: "",
        label: "Latitude",
        type: "number",
        placeholder: ""
      },
      long: {
        value: "",
        label: "Longitude",
        type: "number",
        placeholder: ""
      },
      alt: {
        value: "",
        label: "Altitude",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: LOITER_UNLIM,
    description: "",
    fields: {
      lat: {
        value: "",
        label: "Latitude",
        type: "number",
        placeholder: ""
      },
      long: {
        value: "",
        label: "Longitude",
        type: "number",
        placeholder: ""
      },
      alt: {
        value: "",
        label: "Altitude",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: LOITER_TURNS,
    description: "",
    fields: {
      turn: {
        value: "",
        label: "Turn",
        type: "number",
        placeholder: ""
      },
      dir: {
        value: "",
        label: "Direction",
        type: "number",
        placeholder: ""
      },
      lat: {
        value: "",
        label: "Latitude",
        type: "number",
        placeholder: ""
      },
      long: {
        value: "",
        label: "Longitude",
        type: "number",
        placeholder: ""
      },
      alt: {
        value: "",
        label: "Altitude",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: LOITER_TIME,
    description: "",
    fields: {
      times: {
        value: "",
        label: "Times",
        type: "number",
        placeholder: ""
      },
      lat: {
        value: "",
        label: "Latitude",
        type: "number",
        placeholder: ""
      },
      long: {
        value: "",
        label: "Longitude",
        type: "number",
        placeholder: ""
      },
      alt: {
        value: "",
        label: "Altitude",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: LAND,
    description: "",
    fields: {
      lat: {
        value: "",
        label: "Latitude",
        type: "number",
        placeholder: ""
      },
      long: {
        value: "",
        label: "Longitude",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: TAKEOFF,
    description: "",
    fields: {
      alt: {
        value: "",
        label: "Altitude",
        type: "number",
        placeholder: ""
      }
    }
  },

  // Condition delays
  {
    title: CONDITION_DELAY,
    description: "",
    fields: {
      time: {
        value: "",
        label: "Time",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: CONDITION_YAW,
    description: "",
    fields: {
      angle: {
        value: "",
        label: "Angle",
        type: "number",
        placeholder: ""
      },
      speed: {
        value: "",
        label: "Speed",
        type: "number",
        placeholder: ""
      },
      direction: {
        value: "",
        label: "Direction",
        type: "number",
        placeholder: ""
      },
      absolute_angle: {
        value: "",
        label: "Absolute Angle",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: CONDITION_DISTANCE,
    description: "",
    fields: {
      distance: {
        value: "",
        label: "Distance",
        type: "number",
        placeholder: ""
      }
    }
  },

  // DO Commands
  {
    title: DO_JUMP,
    description: "",
    fields: {
      wp: {
        value: "",
        label: "Waypoint",
        type: "number",
        placeholder: ""
      },
      repeat: {
        value: "",
        label: "Repeat",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: DO_SET_MODE,
    description: "",
    fields: {
      mode: {
        value: "",
        label: "Mode",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: DO_CHANGE_SPEED,
    description: "",
    fields: {
      speed_type: {
        value: "",
        label: "Speed type",
        type: "number",
        placeholder: ""
      },
      speed: {
        value: "",
        label: "Speed",
        type: "number",
        placeholder: ""
      },
      throttle: {
        value: "",
        label: "Throttle",
        type: "number",
        placeholder: ""
      },
      absolute_or_relative: {
        value: "",
        label: "Absolute or relative",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: DO_SET_HOME,
    description: "",
    fields: {
      current: {
        value: "",
        label: "Current",
        type: "number",
        placeholder: ""
      },
      lat: {
        value: "",
        label: "Latitude",
        type: "number",
        placeholder: ""
      },
      long: {
        value: "",
        label: "Longitude",
        type: "number",
        placeholder: ""
      },
      alt: {
        value: "",
        label: "Altitude",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: DO_SET_SERVO,
    description: "",
    fields: {
      ser_no: {
        value: "",
        label: "Servo number",
        type: "number",
        placeholder: ""
      },
      pwm: {
        value: "",
        label: "PWM",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: DO_REPEAT_SERVO,
    description: "",
    fields: {
      ser_no: {
        value: "",
        label: "Servo number",
        type: "number",
        placeholder: ""
      },
      pwm: {
        value: "",
        label: "PWM",
        type: "number",
        placeholder: ""
      },
      repeat: {
        value: "",
        label: "Repeat",
        type: "number",
        placeholder: ""
      },
      delay: {
        value: "",
        label: "Delay",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: DO_DIGI_CAM_CONTROL,
    description: "",
    fields: {
      on_or_off: {
        value: "",
        label: "On/Off",
        type: "number",
        placeholder: ""
      },
      focus_lock: {
        value: "",
        label: "Focus Lock",
        type: "number",
        placeholder: ""
      },
      shutter_cmd: {
        value: "",
        label: "Shutter CMD",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: DO_DIGI_CAM_CONFIGURE,
    description: "",
    fields: {
      mode: {
        value: "",
        label: "Mode",
        type: "number",
        placeholder: ""
      },
      shutter_speed: {
        value: "",
        label: "Shutter speed",
        type: "number",
        placeholder: ""
      },
      aperture: {
        value: "",
        label: "Aperture",
        type: "number",
        placeholder: ""
      },
      iso: {
        value: "",
        label: "ISO",
        type: "number",
        placeholder: ""
      },
      engine_cut_off: {
        value: "",
        label: "Engine cut off",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: DO_SET_RELAY,
    description: "",
    fields: {
      relay_no: {
        value: "",
        label: "Relay",
        type: "number",
        placeholder: ""
      },
      state: {
        value: "",
        label: "State",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: DO_REPEAT_RELAY,
    description: "",
    fields: {
      relay_no: {
        value: "",
        label: "Relay number",
        type: "number",
        placeholder: ""
      },
      repeat: {
        value: "",
        label: "Repeat",
        type: "number",
        placeholder: ""
      },
      delay: {
        value: "",
        label: "Delay",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: DO_SET_CAM_TRIGG_DIST,
    description: "",
    fields: {
      distance: {
        value: "",
        label: "Distance",
        type: "number",
        placeholder: ""
      }
    }
  },
  {
    title: DO_MOUNT_CONTROL,
    description: "",
    fields: {
      pitch: {
        value: "",
        label: "Pitch",
        type: "number",
        placeholder: ""
      },
      roll: {
        value: "",
        label: "Roll",
        type: "number",
        placeholder: ""
      },
      yaw: {
        value: "",
        label: "Yaw",
        type: "number",
        placeholder: ""
      }
    }
  }
];
