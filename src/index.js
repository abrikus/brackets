module.exports = function check(str, bracketsConfig) {
  module.exports = function check(str, bracketsConfig) {
    //let conf = bracketsConfig.join();
    let result = [];
    
    for (let i=0; i < str.length; i++) {
      for (let j=0; j < bracketsConfig.length; j++) {
          
          if (str[i] == bracketsConfig[j][0] && str[i] !== bracketsConfig[j][1]) {
              result.push(bracketsConfig[j][0]);
          }
  
          else if (str[i] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1]) {
            if (result[result.length-1] == bracketsConfig[j][0]) {
              result.pop();
            }
            else {
              result.push(bracketsConfig[j][0]);
            }
          }
  
          else if (str[i] == bracketsConfig[j][1] && str[i]!== bracketsConfig[j][0]) {
            if (result[result.length-1] == bracketsConfig[j][0]) {
              result.pop();
              }
              else {
                result.push(str[i]);
              }
          }
      }
    }
    return result.length == 0;
  }
}
