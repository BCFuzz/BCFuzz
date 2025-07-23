const v2 = createGlobalObject();
const v3 = v2.EvalError;
const v4 = v2.Float16Array;
const v5 = new v4();
const v6 = v5.subarray(v3, createGlobalObject, v3, v4);
try { v6.__defineSetter__(-40659, v3); } catch (e) {}
gc();
