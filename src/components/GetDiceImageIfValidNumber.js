const convertIntToStringBetweenOneAndSix = (intValue) => {

  switch(intValue) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    default:
      return intValue;
  }

}

const getDiceImageIfValidNumber = (visibleSide) => {

  let numberClass = "fa-solid fa-5x blackiconcolor fa-dice-";

  const numberAsString = convertIntToStringBetweenOneAndSix(visibleSide);

  if(numberAsString !== visibleSide){
    numberClass += numberAsString;
    return numberClass;
  }else{
    return visibleSide;
  }

}

export default getDiceImageIfValidNumber