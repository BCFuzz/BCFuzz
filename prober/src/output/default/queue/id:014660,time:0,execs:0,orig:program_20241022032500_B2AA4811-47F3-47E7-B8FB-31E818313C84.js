const o2 = {
    "maxByteLength": 512,
};
const v4 = new ArrayBuffer(512, o2);
const v6 = new Uint16Array(v4);
v6.with();
gc();
