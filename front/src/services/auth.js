const TOKEN_KEY = "@sistemaproducao-Token";
const TYPEUSER_KEY = "@sistemaproducao-TypeUser";

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getTypeUser = () => localStorage.getItem(TYPEUSER_KEY);

export const isAuthenticated = () => {

  return localStorage.getItem(TOKEN_KEY) !== null

};

export const login = (token, typeUser) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(TYPEUSER_KEY, typeUser);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TYPEUSER_KEY);
};