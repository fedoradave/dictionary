const lists = {
  name: 'word-list',
  values: {
    twl06: 'twl06.txt',
    sowpods: 'sowpods.txt',
    enable: 'enable.txt',
  },
  descriptions: {
    'twl06.txt': 'The US Scrabble tournaments word list',
    'sowpods.txt': 'The international Scrabble tournament word list',
    'enable.txt': 'The Words with Friends word list',
  }
};
Object.freeze(lists);
export default lists;
