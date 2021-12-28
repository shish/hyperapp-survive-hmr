import { SurviveHMR } from "../src";

function dispatch(action, args) {
  action({}, args);
}

describe("survive_hmr", () => {
  it("Should save state before HMR, and reload it after", () => {
    // TODO: test
    let [effect, props] = SurviveHMR(module, []);
    expect(effect).not.toEqual(null);
    expect(props).not.toEqual(null);
    effect(dispatch, props);
  });
});
