const express = require('express');
const wordRoutes = express.Router();

let Word = require('./word.model');

wordRoutes.route('/add').post(function (req, res) {
    let word = new Word(req.body);
    console.log(req.body);
    word.save()
        .then(word => {
            res.status(200).json({'word': 'word in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

wordRoutes.route('/').get(function (req, res) {
    Word.find(function(err, words){
        if(err) {
            console.log(err);
        }
        else {
            res.json(words);
        }
    });
});

wordRoutes.route('/').get(function (req, res) {
    Word.find(function(err, words){
        if(err){
            console.log(err);
        }
        else {
            res.json(words);
        }
    });
});

wordRoutes.route('/edit/:id').get(function(req,res){
    let id = req.params.id;
    Word.findById(id, function (err, word){
        res.json(word);
    });
});

wordRoutes.route('/update/:id').post(function (req, res) {
    Word.findById(req.params.id, function(err, word) {
        if (!word)
            res.status(404).send("data is not found");
        else {
            word.word = req.body.word;
            word.definition = req.body.definition;
            word.option1 = req.body.option1;
            word.option2 = req.body.option2;
            word.option3 = req.body.option3;

            word.save().then(word => {
                res.json('Update coplete');
            })
            .catch(err => {
                res.status(400).send("unable to update the database");
            });
        }
    });
});

wordRoutes.route('/delete/:id').get(function (req, res) {
    Word.findByIdAndRemove({_id: req.params.id}, function(err, word){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = wordRoutes;