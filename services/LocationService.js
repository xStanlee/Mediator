class LocationService {
    constructor() {}

    static #instance = 0;
    #locations = [];

    get currentLocation() {
        return this.#locations[this.#locations.length - 1];
    }

    get currentLocations() {
        return this.#locations;
    }

    manageStream(lng, lat) {
        if(this.#locations.length <= 10) {
            const _coordinates = this.#calculateCoords(lng, lat);
            this.#addLocation(_coordinates);
        } else {
            this.#shiftLocation();
        }
    }

    #calculateCoords(lng, lat) {
        //Logic that exchange data incoming from A9G to GMaps readable coords

        return {
            lng,
            lat
        }
    }

    #addLocation(lngLat) {
        this.#locations.push(lngLat);
    }

    #shiftLocation() {
        //Push websocket data
        this.#locations.shift();
    }
}

// export Singleton
export const locationService = new LocationService();