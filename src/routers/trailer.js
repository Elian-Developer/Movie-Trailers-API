const express = require('express')
const Trailer = require('../models/trailer');
const router = new express.Router();



// Route to find all trailers documents
router.get('/trailer', async (req, res) => {
    
    try{
        const trailers = await Trailer.find({})
        res.send(trailers)
        res.status(200).send()
    }catch(error){
        res.status(404).send()
    }
});

// Route to find by id a trailer document
router.get('/trailer/:id', async(req, res) => {
    const _id = req.params.id
    
    try{
        const trailer = await Trailer.findById(_id);
        res.send(trailer);
        res.status(200).send();
        
    }catch(error){
        res.status(500).send();
    }
})

// Route to Add a new Trailer document
router.post('/trailer', async (req, res) => {
    const trailer = new Trailer(req.body);

    try{
        await trailer.save()
        res.status(201).send()
    }catch(error){
        res.status(404).send()
    }

});

// Route to edit a trailer document
router.patch('/trailer/:id', async (req, res) => {
    const _id = req.params.id
    const {title, year, directors, Actors, image, urlTrailer} = req.body

    try{
        const trailer = await Trailer.findByIdAndUpdate(_id, 
            {
            "title": title, 
            "year": year, 
            "directors": directors, 
            "Actors": Actors, 
            "image": image, 
            "urlTrailer": urlTrailer
        })

        if(!trailer){
            return res.status(404).send()
        }

        res.send(trailer);

    } catch(error){
        res.status(500).send()
    }
})

// route to delete a trailer document
router.delete('/trailer/:id', async (req, res) => {
    const _id = req.params.id;

    try{
        const trailer = await Trailer.findByIdAndRemove(_id)

        if(!trailer){
            return res.status(404).send()
        }

        res.send(trailer)
    }catch(error){
        res.status(500).send()
    }
}) 

module.exports = router;




