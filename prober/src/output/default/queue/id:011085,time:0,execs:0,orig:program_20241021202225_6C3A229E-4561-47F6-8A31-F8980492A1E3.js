const o2 = {
    "maxByteLength": 3071283242,
};
const v4 = new SharedArrayBuffer(1024, o2);
const v6 = new Uint8Array(v4);
v6.toReversed();
gc();
