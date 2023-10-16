
const checkIsStringNumber = (stringNumber) => {
   //? definimos la expresión regular
   const regex = /^[0-9]*$/;

   //? retornamos true/false si es un string numero valido
   return regex.test(stringNumber)
}

export default checkIsStringNumber
