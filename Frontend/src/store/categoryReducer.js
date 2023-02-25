const defaultState = {
    category:[]
}



export const categoryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {...state,category:action.payload}
         default:
            return state
    } 
}

export const AddCategoryAction = (payload) => ({type:'ADD_PRODUCTS' , payload})
