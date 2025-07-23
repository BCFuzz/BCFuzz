const o3 = {
    "maxByteLength": 3071283242,
};
const v5 = new SharedArrayBuffer(1024, o3);
const v6 = new Uint8Array(v5);
v6.copyWithin(3071283242, 1024, 1024);
gc();
