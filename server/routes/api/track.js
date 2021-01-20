var express = require('express');
var router = express.Router();

var trackModel = require('../../models/track')

/**
 * GET /api/track/all: Retrieve all tracks.
 */
router.get("/all", function(req, res) {
    trackModel.find(function (err, tracks) {
        if (err) {
            return handleError(err);
        } else {
            res.json(tracks);
        }
    })
});

/**
 * GET /api/cat/:phase - Retrieves all tracks in a certain phase
 */
router.get("/cat/:phase", function(req, res) {
    trackModel.find({ phase: req.params.phase }, function (err, tracks) {
        if (err) {
            return handleError(err);
        } else {
            res.json(tracks);
        }
    })
});

/**
 * POST /api/track/submit: Add a pending track.
 */
router.post("/submit", function(req, res) {
    trackModel.create({
        phase: "pending",
        name: req.body.name,
        version: req.body.version,
        authors: req.body.authors,
        dlLink: req.body.dlLink,
        slot: req.body.slot,
        music: req.body.music,
        submissionNotes: req.body.submissionNotes,
        submissionDate: new Date(),
        submitterID: "Not implemented"
    }, function (err, submission) {
        if (err) {
            return handleError(err);
        } else {
            res.status(201).json(submission.name);
        }
    })
});

/**
 * PUT /api/track/:id - Alter an existing track. Not implemented.
 */
router.put("/api/track/:id", function(req, res) {

});

module.exports = router;