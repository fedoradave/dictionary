const constants = {
  dictionary: '/twl06.txt',
  themes: {
    name: 'theme',
    values: {
      console: 'console',
      blackboard: 'blackboard',
      whiteboard: 'whiteboard',
      paper: 'paper',
      coffee: 'coffee',
    }
  },
  panels: {
    app: 'app',
    settings: 'settings',
    about: 'about'
  },
  selected: {
    default: 'squabble'
  },
  results: {
    default: [],
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
