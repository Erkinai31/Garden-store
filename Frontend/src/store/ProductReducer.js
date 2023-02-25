const defaultState = {
    oneProduct:[]
}



export const oneProductReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_ONE_PRODUCT':
            return {...state,oneProduct:action.payload}
         default:
            return state
    } 
}

export const AddOneProductAction = (payload) => ({type:'ADD_ONE_PRODUCT' , payload})
