const v2 = createGlobalObject();
const v3 = v2.Float16Array;
const v8 = Math.exp(3836 | (-1.7976931348623157e+308 - 3836));
const v9 = new v3(v2, 3836);
const v10 = v9.subarray();
try { v10.with(v8); } catch (e) {}
gc();
