const v1 = createGlobalObject();
const t1 = v1.Float16Array;
const v3 = new t1(v1, v1, v1);
const v5 = new Uint32Array();
v5.__proto__ = v3;
v5.slice();
gc();
