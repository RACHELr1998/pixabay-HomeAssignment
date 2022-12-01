import produce from "immer";
import createReducer from "./utilsReducer";

//Create State
const initialState = {
  page: 1,
  limit: 9,
  category: "flowers",
  images: [],
  previous: null,
  next: null,
  categories: [
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music",
    "flowers",
  ],
};

//Objects of methods where the name of the method is the action type
const imagesHandling = {
  next(state, action) {
    state.page = action.payload;
  },
  previous(state, action) {
    state.page = action.payload.previous.page;
  },
  setCategory(state, action) {
    state.category = action.payload;
    state.page = 1;
  },
  setImages(state, action) {
    state.images = action.payload.results;
    state.next = action.payload?.next;
    state.previous = action.payload?.previous;
  },
};

export default produce(
  (state, action) => createReducer(state, action, imagesHandling),
  initialState
);
