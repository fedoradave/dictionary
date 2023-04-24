const routes = {
  root: '/',
  search: {
    root: 'search/',
    list: ':list/',
    mode: ':mode/',
    word: ':word/',
  }
};
Object.freeze(routes);
export default routes;
