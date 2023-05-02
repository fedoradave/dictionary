const lists = {
  name: 'word-list',
  values: {
    enable: 'enable.txt',
    sowpods: 'sowpods.txt',
    twl06: 'twl06.txt',
  },
  descriptions: {
    'enable.txt': 'The Words with Friends word list',
    'sowpods.txt': 'The international Scrabble tournament word list',
    'twl06.txt': 'The US Scrabble tournaments word list',
  }
};
Object.freeze(lists);
export default lists;
