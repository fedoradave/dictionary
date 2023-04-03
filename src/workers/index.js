import reducer from 'workers/reducer';
import actions from 'workers/actions';
let state = {};
onmessage = e => {
  const { type, payload } = e.data;
  if (!type || !reducer[type]) {
    return postMessage(actions.worker.noop({
      message: 'noop: actions require a type.'
    }));
  }
  state = reducer[type](state, { type, payload });
  if (state.response) {
    return postMessage(state.response);
  }
};
