// Utility Functions for steel-template-gatsby

//---------------------------------------------------------------------------------------//
// createString()
// create the string required by snipcart to allow price changes based on option chosen
// eg. S[+-1]|M[+0]|L[+1]|XL[+-1]
//---------------------------------------------------------------------------------------//

const createString = (values, selected) => {
  return values
    .map((option) => {
      const price =
        option.price >= 0 ? `[+${option.price - selected.price}]` : `[${option.price}]`;
      return `${option.title}${price}`;
    })
    .join('|');
};

//----------------------------------------------//
//  isDigital()
//  returns first digital variant
//----------------------------------------------//

const isDigital = (elem) => elem.digital === true;



export { createString, isDigital }