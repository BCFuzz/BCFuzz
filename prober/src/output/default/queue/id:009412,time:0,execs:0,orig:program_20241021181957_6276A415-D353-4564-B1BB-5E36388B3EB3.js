const v4 = createGlobalObject().Float16Array;
try { new v4(9007199254740991); } catch (e) {}
const v6 = new v4();
v6.subarray().join("");
gc();
