class SmartPhone extends BasicPhone {
    constructor(brand, model, technology, dimensions, sim, type, size, resolution, os, chipset, cpu, gpu, cardSlot, internal, camera, frontCamera, backCamera, bluetooth, features, battery, price) {
        super(brand, model, technology, dimensions, sim, resolution, cardSlot, camera, bluetooth, battery, price)
        this.type = type
        this.size = size
        this.os = os
        this.chipset = chipset
        this.cpu = cpu
        this.gpu = gpu
        this.internal = internal
        this.frontCamera = frontCamera
        this.backCamera = backCamera
        this.features = features
    }

    showSmart = () =>
        this.showBasic() + `
        <dt>DISPLAY</dt>
        <dd>Type: ${this.type}</dd>
        <dd>Size: ${this.size}</dd>
        <dt>PLATFORM</dt>
        <dd>OS: ${this.os}</dd>
        <dd>Chipset: ${this.chipset}</dd>
        <dd>CPU: ${this.cpu}</dd>
        <dd>GPU: ${this.gpu}</dd>
        <dt>MEMORY</dt>
        <dd>Internal: ${this.internal}</dd>
        <dt>CAMERA</dt>
        <dd>Front: ${this.frontCamera} MP</dd>
        <dd>Back: ${this.backCamera} MP</dd>
        <dt>FEATURES</dt>
        <dd>${this.features}</dd> 
        `
}