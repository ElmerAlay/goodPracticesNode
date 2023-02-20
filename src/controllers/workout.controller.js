const workoutService = require("../services/workout.service.js");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: "OK", data: allWorkouts});
};

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send(`<h1>Get workout ${req.params.workoutId}</h1>`);
};

const createNewWorkout = (req, res) => {
    const { body } = req;

    if(!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };

    const createdWorkout = workoutService.createNewWorkout(newWorkout);

    res.status(201).send({response: "OK", data: createdWorkout});
};

const updateOneWorkout = (req, res) => {
    res.status(201).send({response: "OK"});
};

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send(`<h1>Delete workout ${req.params.workoutId}</h1>`)
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}