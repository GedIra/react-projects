export const length = (str='') => str.split('').length > 7
export const digits = (str='') => str.split('').some(char => Number.isInteger(Number(char)))
export const upperCase = (str='') => str.split('').some(char => 65 <= char.charCodeAt(0) && char.charCodeAt(0) <= 90)
export const lowerCase = (str='') => str.split('').some(char => 97 <= char.charCodeAt(0) && char.charCodeAt(0) <= 122)
export const special = (str='') => str.split('').some(char => !digits(char) && !upperCase(char) && !lowerCase(char))
