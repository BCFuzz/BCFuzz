const v0 = [1073741823,-1005480844,4294967295,-58434];
const v1 = v0.copyWithin(v0, v0, v0);
const o5 = {
    "maxByteLength": 4096,
};
const v7 = new ArrayBuffer(4096, o5);
const v8 = new Float32Array(v7);
v8.set(v1);
gc();
