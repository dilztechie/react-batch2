class Box {
    constructor(height, width, depth) {
        this.height = height
        this.width = width
        this.depth = depth
    }

    toString = () => "Box [height:" + this.height +
        ", width:" + this.width + ", depth:" + this.depth + "]"

    volume = () => this.height * this.width * this.depth

    doubleBox = () => new Box(this.height * 2, this.width * 2, this.depth * 2)
}