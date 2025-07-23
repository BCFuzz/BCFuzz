const o2 = {
    "maxByteLength": 1335,
};
const v4 = new SharedArrayBuffer(64, o2);
const v6 = new Uint32Array(v4);
const v8 = [64,64,64,64,64];
Reflect.apply(v6.lastIndexOf, v6, v8);
gc();
