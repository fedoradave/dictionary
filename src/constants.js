const constants = {
  dictionary: '/twl06.txt',
  selected: {
    default: 'squabble'
  },
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
  },
  group: {
    name: 'group',
    default: true,
  }
};
Object.freeze(constants);
export default constants;
