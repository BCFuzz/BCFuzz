const v1 = new Int32Array();
const v4 = new Int16Array();
const v5 = new Uint32Array(v4);
v4["set"](v5, v1);
gc();
