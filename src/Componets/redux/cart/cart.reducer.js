import { CartActionType } from "./cartAction.type";
const INTIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.toggleCartHandler:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return {
        state,
      };
  }
};
export default cartReducer;
