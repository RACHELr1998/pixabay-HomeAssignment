import imagesMethods from "../services/imagesService";
import actions from "./actions";

//Middleware that trigger with every state change
const fetch = (store) => (next) => async (action) => {
  if (action.type === "GET_IMAGES") {
    const state = store.getState();
    // Return a list of images by params
    const response = await imagesMethods.getImages(
      action.payload.page,
      state.limit,
      action.payload.category
    );
    //Update the global state with the response data
    store.dispatch(actions.setImages(response.data));
  }
  return next(action);
};

export default fetch;
