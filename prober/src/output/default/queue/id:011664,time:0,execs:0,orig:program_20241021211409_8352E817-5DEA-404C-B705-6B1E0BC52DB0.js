const o2 = {
    "maxByteLength": 185,
};
const v4 = new ArrayBuffer(185, o2);
const v6 = new Uint16Array(v4);
v6.buffer;
let {...v8} = v6;
gc();
