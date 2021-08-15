HyperApp Survive HMR
====================

A handy function to save app state before a reload and load state after it

Use like:

```
import { survive_hmr } from "@shish2k/hyperapp-survive-hmr";

let dispatch = app({...})

survive_hmr(dispatch, module);
```
