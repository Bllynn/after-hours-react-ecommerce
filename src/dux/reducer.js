const initialState = {
    catalog: []
}

const GET_PRODUCTS = 'GET_PRODUCTS'

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return Object.assign({}, state, {catalog: action.payload})

        default: 
            return state;
    }
}

export function getAllProducts(products) {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}
