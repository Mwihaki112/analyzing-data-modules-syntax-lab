require("datejs");

function combineUsers(...args){
  const combinedObject = {
    users:[]
  };

  for(let arr of args){
    combinedObject.users.push(...arr);
  }
  let today = Date.today();
  combinedObject.merge_date = today.toString("M/d/yyyy");

  return combinedObject;
}

const result = combineUsers(
  ["Bojack", "Horseman"], 
  ["Todd", "Chavez"], 
  ["Vanessa", "Geko"],
);

console.log(result);


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};