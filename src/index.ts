import type { Dispatch, Effect, Subscription, Unsubscribe } from "hyperapp";

type SurviveHMRProps<S> = {
  module: any;
  fresh_inits: Array<Effect<S>>;
};

const DEBUG = false;

function survivor<S>(
  dispatch: Dispatch<S>,
  props: SurviveHMRProps<S>
): Unsubscribe {
  if (DEBUG) console.log("Checking hmr", props.module);
  let hmred = false;

  if (typeof props.module !== "undefined" && props.module.hot) {
    props.module.hot.dispose(function (data) {
      dispatch(function (state) {
        if (DEBUG) console.log("Saving state");
        data.saved_state = state;
        return state;
      });
    });
    props.module.hot.accept(function (getParents) {
      dispatch(function (state) {
        if (!props.module.hot.data || !props.module.hot.data.saved_state) {
          if (DEBUG) console.log("No saved state");
          return state;
        }
        if (DEBUG) console.log("Loading state");
        hmred = true;
        return props.module.hot.data.saved_state;
      });
    });
  }

  requestAnimationFrame(function () {
    if (DEBUG) console.log("HMR activity detected", hmred);
    if (!hmred) {
      if (DEBUG)
        console.log("HMR didn't do anything, running original init functions");
      dispatch(function (state) {
        return [state, ...props.fresh_inits];
      });
    }
  });

  return () => {};
}

export function SurviveHMR<S>(
  module: any,
  fresh_inits: Array<Effect<S>>
): Subscription<S, SurviveHMRProps<S>> {
  return [survivor, { module, fresh_inits }];
}
