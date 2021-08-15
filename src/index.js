/* eslint-disable no-undef */
export function survive_hmr(dispatch) {
  if (typeof module !== "undefined" && module.hot) {
    module.hot.dispose(function(data) {
      dispatch(function(state) {
        data.saved_state = state;
        return state;
      });
    });
    module.hot.accept(function(getParents) {
      dispatch(function(state) {
        return module.hot.data.saved_state;
      });
    });
  }
}
