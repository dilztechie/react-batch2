export default class Message {
    static ids = 0
    constructor(text, author) {
        this.id = ++Message.ids
        this.text = text
        this.author = author
        this.created = new Date()
        this.updated = new Date()
    }
}