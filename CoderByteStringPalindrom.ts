function StringChallenge(str: string) { 
    str = str.replace(/ /g,"").toLowerCase();
    var compareStr = str.split("").reverse().join("");

    if (compareStr === str) {
        return true;
    } 
    else {
        return false;
    } 
    
  }
     
  // keep this function call here 
  // @ts-ignore

  console.log(StringChallenge("rotor plus three"));