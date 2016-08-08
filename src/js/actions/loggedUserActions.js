export function getLoggedUser() {
  return {
    type: "GET_LOGGED_USER",
    payload: {
      name: "Isaac Newton",
      username: "inewton",
    }
  }
}