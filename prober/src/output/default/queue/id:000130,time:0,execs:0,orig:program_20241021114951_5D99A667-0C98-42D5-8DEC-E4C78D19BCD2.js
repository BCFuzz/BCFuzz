const v1 = new Uint16Array();
const v2 = v1.sort();
const v3 = new Uint16Array(v1, v2, Uint16Array);
v2.__proto__ = v3;
gc();
