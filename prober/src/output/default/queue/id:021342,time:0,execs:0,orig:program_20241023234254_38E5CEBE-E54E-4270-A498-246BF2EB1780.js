const o2 = {
    "maxByteLength": 1073741824,
};
const v5 = createGlobalObject().Float16Array;
const v6 = v5.__proto__;
let v7;
try { v7 = v6(1073741824, ArrayBuffer, v5, v6, ArrayBuffer); } catch (e) {}
const v9 = new ArrayBuffer(1622, o2);
const v10 = new v5(v9);
Object.defineProperty(v10, "constructor", { get: v7 });
v10.subarray();
gc();
