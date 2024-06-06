export const reducer1 = (state= "Default",action) => {
    //if-else (ladder)
    //switch case

    if(action.type == "action1"){
        //Action => code to be execute
        //State => Arithmetic operation &&  || Function

        state =+ action.payload
    }
    else if (action.type == "action2"){
        state =+ action.payload
    }
    else if (action.type == "action3"){
        state =+ action.payload
    }
    else if(action.type == "action4"){
        state =+ action.payload
    }
    else if(action.type == "action5"){
        state =+ action.payload
    }
    else{
        //BY Default state return
    }
}