const o2 = {
    "maxByteLength": 4096,
};
const v4 = new ArrayBuffer(255, o2);
const v6 = new Uint16Array(v4);
v6["copyWithin"]();
gc();
