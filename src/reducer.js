let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
        },
      ];
    default:
      return state;
  }
}
