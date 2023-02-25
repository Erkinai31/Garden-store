const defaultState = {
    categoriesList:[]
}



export const categoriesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CATEGORIES':
            return {...state, categoriesList: [...action.payload]}
        default:
            return state
    } 
}

export const AddCategoriesAction = (payload) => ({type:'ADD_CATEGORIES' , payload})
