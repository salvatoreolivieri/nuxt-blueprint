export default () => {
  /* Password rules
      - deve contenere almeno una lettera maiuscola (lookahead positive (?=.*[A-Z])).
      - deve contenere almeno una cifra (lookahead positive (?=.*\d)).
      - può contenere caratteri alfanumerici e caratteri speciali (compresi gli spazi) ( [a-zA-Z\d\W]).
      - avere una lunghezza minima di 8 caratteri e una lunghezza massima di 25 caratteri ({8,25})
    */
  const checkPassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{8,25}$/
    return regex.test(password)
  }

  const checkFiscalCode = (fiscalCode: string) => {
    const regex =
      /^(?:[A-Z][AEIOU][AEIOUX]|[AEIOU]X{2}|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i
    return regex.test(fiscalCode)
  }

  return {
    checkPassword,
    checkFiscalCode,
  }
}
