class BasicPhone {
    constructor(brand, model, technology, dimensions, sim, resolution, cardSlot, camera, bluetooth, battery, price) {
        this.brand = brand
        this.model = model
        this.technology = technology
        this.dimensions = dimensions
        this.sim = sim
        this.resolution = resolution
        this.cardSlot = cardSlot
        this.camera = camera
        this.bluetooth = bluetooth
        this.battery = battery
        this.price = price
    }

    showBasic = () => `
        <h3>Specifications of ${this.brand} ${this.model}</h3>
        <dl>
            <dt>NETWORK</dt>
            <dd>Technology: ${this.technology}</dd>
            <dt>BODY</dt>
            <dd>Dimensions: ${this.dimensions}</dd>
            <dd>SIM: ${this.sim}</dd>
            <dt>DISPLAY</dt>
            <dd>Resolution: ${this.resolution}</dd>
            <dt>MEMORY</dt>
            <dd>Card Slot: ${this.cardSlot ? this.cardSlot : "No"}</dd>
            <dt>CAMERA: ${this.camera ? this.camera : "No"}</dt>
            <dt>COMMS</dt>
            <dd>Bluetooth: ${this.bluetooth ? this.bluetooth : "No"}</dd>
            <dt>BATTERY</dt>
            <dd>Talktime: ${this.battery} Hrs.</dd>
            <dt>PRICES AT</dt>
            <dd>INR ${this.price}</dd>
        </dl>
    `
}