const o2 = {
    "maxByteLength": 4096,
};
const v4 = new SharedArrayBuffer(145, o2);
const v6 = new Int8Array(v4);
v6[123] = v6;
gc();
