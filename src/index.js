module.exports = function check(str, bracketsConfig) {

    let result = [];
    
    for (let i=0; i < str.length; i++) {
      for (let j=0; j < bracketsConfig.length; j++) {
          /* push but not the same */
          if (str[i] == bracketsConfig[j][0] && str[i] !== bracketsConfig[j][1]) {
              result.push(bracketsConfig[j][0]);
          }
          /* the same */
          else if (str[i] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1]) {
            if (result[result.length-1] == bracketsConfig[j][1]) {    // last symbol check
              result.pop();
            }
            else {
              result.push(bracketsConfig[j][0]);
            }
          }
          /* pop not the same */
          else if (str[i] == bracketsConfig[j][1] && str[i] !== bracketsConfig[j][0]) {
            if (result[result.length-1] === bracketsConfig[j][0]) {
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

