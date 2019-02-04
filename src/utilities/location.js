class Location {
  static async currentPosition() {
    return new Promise(function(resolve, reject) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        throw String("Geolocation is not supported by this browser.");
      }
    });
  }
}

export default Location;
