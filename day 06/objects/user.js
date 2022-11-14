class User {
    constructor(name, creationDate) {
        this.name = name
        this.creationDate = creationDate
    }

    static authenticate = (username, password) =>
        username.toString() == "dilip" && password.toString() == "malani" ?
            "Authorized User" : "UnAuthorized User"

    /*
    static sortByName = (userA, userB) => {
        if (userA.name.toString() < userB.name.toString()) return -1
        else return 1
    }

    static sortByCreationDate = (userA, userB) => userA.creationDate - userB.creationDate
    */

    toString = () => "User [name:" + this.name + ", creationDate:" + this.creationDate + "]"
}