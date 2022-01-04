// the way to share code between files in node 
// is by using module.exports.property_name

// module.exports.greet = function greet(){
//   console.log("Hello!!");
// }

export function greet(){ 
  console.log("Hello!!");
}