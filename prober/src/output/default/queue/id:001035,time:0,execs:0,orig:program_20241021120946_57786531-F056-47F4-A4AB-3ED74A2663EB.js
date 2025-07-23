const o2 = {
    "maxByteLength": 2057,
};
const v4 = new ArrayBuffer(1000, o2);
let v6 = new Uint32Array(v4);
[...v6] = v6;
gc();
