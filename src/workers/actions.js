import constants from 'constants';
const actions = {
  client: {
    query: payload => ({
      type: constants.actions.query, payload
    }),
    setWordList: payload => ({
      type: constants.actions.setWordList, payload
    }),
  },
  worker: {
    result: payload => ({
      type: constants.actions.result,
      payload
    }),
    resultFail: payload => ({
      type: constants.action.resultFail,
      payload
    }),
    setWordListSuccess: () => ({
      type: constants.actions.setWordListSuccess
    }),
    setWordListFail: payload => ({
      type: constants.actions.setWordListFail, payload
    }),
    noop: payload => ({
      type: constants.actions.noop, payload
    }),
  }
};
export default actions;
