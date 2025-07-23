const o2 = {
    "maxByteLength": 1000,
};
const v4 = new ArrayBuffer(1000, o2);
const v6 = new Float64Array(v4);
let v8 = new Int16Array(v6, 1000, 1000);
[v8] = v6;
gc();
