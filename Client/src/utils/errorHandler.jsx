export const validateString = (value)=> {
    return value.length < 3 || value === null? "Must have at least 3 characters" : null;
}