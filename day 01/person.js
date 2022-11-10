class Person {
    name
    height
    weight

    Person(name, height, weight) {
        this.name = name
        this.height = height
        this.weight = weight
    }

    toString() {
        return "Person [name: " + name + ", height: " + height + ", weight: " + weight + "]";
    }
}