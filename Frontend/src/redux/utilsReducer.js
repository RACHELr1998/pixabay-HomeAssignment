//Return from uppercase to a lowercase function name( as it is written in the image handling object)
function convertActionTypeToName(actionType) {
  return actionType.toLowerCase().replace(/_(\w)/g, (v) => v[1].toUpperCase());
}

//Handlers contain an object with all functions, where the name of the function us like the action.type
function createReducer(state, action, handlers) {
  //The name of the function like the action.type but in lowercase
  const key = convertActionTypeToName(action.type);
  //Get the function by name
  const handler = handlers[key];

  if (handler) {
    handler(state, action);
  }
}

export default createReducer;
