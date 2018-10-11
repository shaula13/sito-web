export const authUrl = 'oauth/token';
export const documentUrl = 'document/';
export function getHeaders() {
  const out = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
  return out;
}
export const generalHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
export const loginHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': 'Basic ' + btoa('web:web-secret')
};
