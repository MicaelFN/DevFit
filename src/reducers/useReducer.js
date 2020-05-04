const initialState = {
    name:'',
    level:'', //beginner, intermediate, advanced
    workoutDays:[], 
    myWorkouts:[],
    lastWorkout:'', //import id
    dailyProgress:['2020-05-02', '2020-05-01']
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'SET_NAME':
            return {...state, name:action.payload.name};
            break;
    }
    return state;

}