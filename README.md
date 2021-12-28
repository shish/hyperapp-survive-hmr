HyperApp Survive HMR
====================

A handy function to save app state before a reload and load state after it

Given a basic app like:

```
app({
    init: [
        state,
        FetchInitData(),
    ],
    ...
});
```

We can add HMR support like:

```
import { SurviveHMR } from "@shish2k/hyperapp-survive-hmr";

app({
    init: [
        state,
        SurviveHMR(module, [
            FetchInitData(),
        ]),
    ],
    ...
});
```

Notably instead of running a bunch of effects as part of `init`, we only
run `SuriveHMR`, and we allow it to run extra effects as-needed
