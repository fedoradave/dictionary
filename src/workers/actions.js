import constants from 'constants';
const actions = {
  client: {
    query: payload => ({ type: constants.actions.query, payload }),
    setWordList: payload => ({ type: constants.actions.setWordList, payload }),
  },
  worker: {
    setWordListSuccess: () => ({ type: constants.actions.setWordListSuccess }),
    setWordListFail: payload => ({ type: constants.actions.setWordListSFail, payload }),
  }
};
export default actions;
