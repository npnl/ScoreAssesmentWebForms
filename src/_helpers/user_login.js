export function isUserAdmin() {
    // return authorization header with jwt token
    let isAdmin = JSON.parse(localStorage.getItem('current_user'))['admin'];
    return isAdmin;
}