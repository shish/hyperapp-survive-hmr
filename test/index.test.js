import { survive_hmr } from "../src";

function dispatch(action, args) {
  action({}, args);
}

describe("survive_hmr", () => {
  it("Should save state before HMR, and reload it after", () => {
    // TODO: test
    survive_hmr(dispatch);
  });
});
