import { Schema, model } from "mongoose";

const movieSchema = new Schema({

    genre: {
        type: String,

    },
    title: {
        type: String,
        required: true,

    },
    year: {
        type: Number,
        required: true,
    }
    
});


export default model ("movie", movieSchema)