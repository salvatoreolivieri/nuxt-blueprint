/*
La password: 
    - deve contenere almeno una lettera maiuscola (lookahead positive (?=.*[A-Z])).
    - deve contenere almeno una cifra (lookahead positive (?=.*\d)).
    - può contenere caratteri alfanumerici e caratteri speciali (compresi gli spazi) ( [a-zA-Z\d\W]).
    - avere una lunghezza minima di 8 caratteri e una lunghezza massima di 25 caratteri ({8,25})
*/

export const checkPassword = (password: string) => {
  const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{8,25}$/

  return regex.test(password)
}
