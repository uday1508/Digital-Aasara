export function userValidate(email){

    
    const re = /^Admin\w*/
    if (!email) return "Username  can't be empty."
    if (!re.test(email)) return 'Ooops! Username Must Start with Admin'
    return ''
}