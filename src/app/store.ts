
export interface appState {
    todos: dataObject[],
}
export interface dataObject{
    id: number,
    name: string,
}

if(localStorage.getItem("data") === null ) {
    localStorage.setItem("data", JSON.stringify({
        todos: [],
    }))
}

export const INITIAL_STATE: appState = JSON.parse(localStorage.getItem("data"));

export function Reducer(state: appState, action) {
    
    switch(action.type) {
        case "Add":
            // console.log("action---->",action);
            let iObj = Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.dataObj)),
            });
            console.log("State-->",iObj)
            return iObj;
        case "Delete":
            //let stateData = ngRedux.getState();
            //console.log("Edit stateData-->",state)
            if(state){
                for(let i = 0; i < state.todos.length ; i++){
                    console.log("state.todos[i].id--->",state.todos[i].id);
                    console.log("action.dataObj.id--->",action.dataObj);
                    if(state.todos[i].id == action.dataObj){
                        console.log("Data Found-->",state.todos[i])
                        state.todos.splice(0,1);
                    }
                }
            }
            return state
        case "Edit":
            //let stateData = ngRedux.getState();
            //console.log("Edit stateData-->",state)
            if(state){
                for(let i = 0; i < state.todos.length ; i++){
                    //console.log("state.todos[i].id--->",state.todos[i].id);
                    //console.log("action.dataObj.id--->",action.dataObj);
                    if(state.todos[i].id == action.dataObj.id){
                        console.log("Data Found-->",state.todos[i])
                        state.todos[i].id = action.dataObj.id;
                        state.todos[i].name = action.dataObj.name;
                    }
                }
            }
            return state

    }
    return state;
}



