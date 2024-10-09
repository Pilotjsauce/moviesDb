import {Router} from "express";
import Movie from "../models/moviesModels.js";


const router = Router()
//add new movie to database
router.post("/movies", async (req,res) =>{

    try { 

        const movie =  new Movie(req.body);
        const newMovie = await movie.save();

        res.send({
            response: "Movie was successfully added",
            newMovie
    
        });

    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            response: "Error in Packet.",
            error: error.message
        });
    }
    });
export default router;

