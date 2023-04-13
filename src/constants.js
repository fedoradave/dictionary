const constants = {
  actions: {
    respond: 'respond',
    noop: 'noop',
    query: 'query',
    result: 'result',
    resultFail: 'resultFail',
    setWordList: 'setWordList',
    setWordListFail: 'setWordListFail',
    setWordListSuccess: 'setWordListSuccess',
  },
  dictionary: '/twl06.txt',
  themes: {
    name: 'theme',
    default: 'console',
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
    default: null//'squabble'
  },
  results: {
    default: [],
  },
  message: {
    default: 'Search a word.'
  },
  query: {
    name: 'query',
    valid: 'abcdefghijklmnopqrstuvwxyz',
    wildcard: '?'
  },
  modes: {
    name: 'modes',
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
  },
  lists: {
    name: 'word-list',
    default: 'twl06.txt',
    values: {
      twl06: 'twl06.txt',
      sowpods: 'sowpods.txt',
      enable: 'enable.txt',
    },
    descriptions: {
      'twl06.txt': 'The official US Scrabble tournaments word list.',
      'sowpods.txt': 'The official international Scrabble tournament word list.',
      'enable.txt': 'The official Words with Friends word list.',
    }
  },
  workers: {
    lifeguard: '/lifeguard.js',
    swimmer: '/swimmer.js'
  },
};
Object.freeze(constants);
export default constants;
