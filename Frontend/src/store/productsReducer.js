const defaultState = {
    productsList:[]
}



export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {...state, productsList:action.payload.map(elem => ({...elem, show: true, show2:true})) }
            case 'SORT_PRODUCTS':
                if(action.payload == 1){
                    return {...state, productsList: state.productsList.slice().sort((crElem, nxElem) => nxElem.price - crElem.price)}
                } else if (action.payload == 2){
                    return {...state, productsList: state.productsList.slice().sort((crElem, nxElem) => crElem.price - nxElem.price)}
                } else if (action.payload == 3){
                    return {...state, productsList: state.productsList.slice().sort((crElem, nxElem) => {
                        if (crElem.title > nxElem.title) return 1
                        if (crElem.title < nxElem.title) return -1
                        if (crElem.title == nxElem.title) return 0
                    })}
                }
                 else{ 
                    return state
                }
            case 'FILTER_PRODUCTS':
                if (action.payload == true){
                    return {...state, productsList: state.productsList.map(elem => {
                        if (elem.price - elem.discont_price === 0){
                            elem.show = !elem.show
                        }
                        return elem
                    }) }
                } else {
                    return {...state, productsList: state.productsList.map(elem => ({...elem, show: true}))}
                }
            case 'FILTER_PRODUCTS_PRICE':
                state.productsList = state.productsList.map(elem=>({...elem,show2:true}))
                    return {...state, productsList: state.productsList.map(elem => {
                        if (!(elem.discont_price >= action.payload.min_price && elem.discont_price <= action.payload.max_price)){
                            elem.show2 = false
                        }
                        return elem
                    })}

        default:
            return state
    } 
}

export const AddProductsAction = (payload) => ({type:'ADD_PRODUCTS' , payload})
export const sortProductsAction = (payload) => ({type: 'SORT_PRODUCTS', payload})
export const filterProductsAction = (payload) => ({type: 'FILTER_PRODUCTS', payload})
export const filterProductsPriceAction = (payload) => ({type: 'FILTER_PRODUCTS_PRICE', payload})
