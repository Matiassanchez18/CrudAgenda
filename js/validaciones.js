// validar los inputs del form

export function validarCaracteres(input, min, max) {
   
    if(input.value.length >= min && input.value.length <= max) {
      return true;
    } else {
      return false;
    }
  }