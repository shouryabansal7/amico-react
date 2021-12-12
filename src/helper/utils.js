export function getFormBody(params) {
  let fromBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123
    fromBody.push(encodedKey + '=' + encodedValue);
  }
  return fromBody.join('&'); // aakash 123 => aakash%2020123
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem('token');
}
