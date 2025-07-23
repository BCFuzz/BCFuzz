const v0 = [-13,-18603,-1073741824,-9007199254740992,-8962,9007199254740990,-9007199254740990,-53674,9007199254740992,2147483647];
const v1 = v0.values();
const v3 = new Float32Array(v0);
let v4 = v3[0];
v4++;
const t4 = createGlobalObject().Float16Array;
const v9 = new t4();
v9.copyWithin(v1, v9, v4);
gc();
