const initialstate = 0;

const changenumber = (state = initialstate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
      break;
    case "DECREMENT":
      return state - 1;

      break;

    default:
      return state;
      break;
  }
};

export default changenumber;
