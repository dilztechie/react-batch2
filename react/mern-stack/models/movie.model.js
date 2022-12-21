module.exports = mongoose => {
    const Movie = mongoose.model("movie", mongoose.Schema({
        id: { type: Number, required: true },
        title: { type: String },
        starring: { type: Array },
        directors: { type: Array },
        genres: { type: Array },
        language: { type: String },
        year: { type: Number }
    }))
    return Movie
}