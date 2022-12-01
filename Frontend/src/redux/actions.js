//Function to convert actionName to uppercase:
function convertActionNameToType(actionName) {
  return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}

//Return object with type and payload:
const actions = new Proxy(
  {},
  {
    get: function (target, prop) {
      if (target[prop] === undefined)
        return function (args) {
          return {
            //Return type in uppercase:
            type: convertActionNameToType(prop),
            payload: args,
          };
        };
      else return target[prop];
    },
  }
);

export default actions;
