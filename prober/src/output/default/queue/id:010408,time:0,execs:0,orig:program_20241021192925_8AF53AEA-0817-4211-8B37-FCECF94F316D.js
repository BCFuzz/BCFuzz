const v1 = createGlobalObject();
const v2 = v1.EvalError;
const t1 = v1.Float16Array;
const v4 = new t1();
const v6 = v4.filter(v2).with;
try { v6.apply(v6, v4); } catch (e) {}
gc();
