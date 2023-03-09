import mongoose from "mongoose";

const Schema = mongoose.Schema; //the structure of any database. It defines how the data was stored in a database and also shows the relationship among those data

const userSchema = new Schema ({ // criando um modelo de usuario
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlenght: 6
    }
});