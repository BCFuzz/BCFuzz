const o2 = {
    "maxByteLength": 1073741824,
};
const v5 = createGlobalObject().Float16Array;
const v7 = new ArrayBuffer(1622, o2);
const v8 = new v5(v7);
const t6 = this.Int32Array;
const v11 = new t6(ArrayBuffer, v8, v5);
const t8 = v11.constructor;
new t8(v8);
gc();
