const constants = {
  dictionary: '/twl06.txt',
  message: {
    default: 'Search a word.'
  },
  query: {
    name: 'query',
  },
  options: {
    name: 'options',
    values: {
      exact: 'exact',
      starts: 'starts',
      ends: 'ends',
      contains: 'contains',
      scramble: 'scramble',
    }
  }
};
Object.freeze(constants);
export default constants;
