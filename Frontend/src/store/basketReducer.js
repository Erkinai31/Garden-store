let defaultState = {
  basket: JSON.parse(localStorage.getItem("goods")) ?? [],
};



const ADD_ELEMS = "ADD_ELEMS";
const ADD_COUNT = "ADD_COUNT";
const REM_COUNT = "REM_COUNT";
const REM_ELEM = "REM_ELEM";


export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ELEMS:
      let newGood = state.basket.find((elem) => elem.id == action.payload.id);
    if (newGood) {
        return {
          ...state,
          basket: state.basket.map((elem) => {
            if (elem.id == newGood.id) {
              elem.count = elem.count + 1;
            }
            return elem;
          }),
        };
      } else {
        return {
          ...state,
          basket: [
            ...state.basket,
            {
              ...action.payload,
              count: 1,
            },
          ],
        };
      }
    case ADD_COUNT:
      return {
        ...state,
        basket: state.basket.map((elem) => {
          if (elem.id == action.payload) {
            elem.count = elem.count + 1;
          }
          return elem;
        }),
      };
    case REM_COUNT:
      let cart = state.basket.find((elem) => elem.id == action.payload);
      if (cart.count == 1) {
        return {
          ...state,
          basket: state.basket.filter((elem) => elem.id != action.payload),
        };
      } else {
        return {
          ...state,
          basket: state.basket.map((elem) => {
            if (elem.id == action.payload) {
              elem.count = elem.count - 1;
            }
            return elem;
          }),
        };
      }
    case REM_ELEM:
      return {
        ...state,
        basket: state.basket.filter((elem) => elem.id != action.payload),
      };
    default:
      return state;
  }
};

export const addElemsAction = (payload) => ({ type: ADD_ELEMS, payload });
export const addCountAction = (payload) => ({ type: ADD_COUNT, payload });
export const remCountAction = (payload) => ({ type: REM_COUNT, payload });
export const remElemAction = (payload) => ({ type: REM_ELEM, payload });
