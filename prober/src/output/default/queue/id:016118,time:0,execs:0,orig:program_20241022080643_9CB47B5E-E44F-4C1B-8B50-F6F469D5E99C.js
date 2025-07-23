const v2 = new Float32Array([-13,-18603,-1073741824,-9007199254740992,-8962,9007199254740990,-9007199254740990,-53674,9007199254740992,2147483647]);
const v3 = v2[0];
const v5 = createGlobalObject();
const t3 = v5.Float16Array;
const v7 = new t3(v5);
v7.copyWithin(v2, v7, v3);
gc();
