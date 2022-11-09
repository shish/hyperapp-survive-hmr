import { SurviveHMR } from "../src";

function dispatch(action, args) {
  action({}, args);
}

describe("survive_hmr", () => {
  it("Should save state before HMR, and reload it after", () => {
    // TODO: test
    let [sub, props] = SurviveHMR(module, []);
    expect(sub).not.toEqual(null);
    expect(props).not.toEqual(null);
    sub(dispatch, props);
  });
});
