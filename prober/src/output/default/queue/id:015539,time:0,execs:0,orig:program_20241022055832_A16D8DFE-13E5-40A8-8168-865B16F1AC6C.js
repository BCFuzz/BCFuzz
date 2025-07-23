const o2 = {
    "maxByteLength": 4294967295,
};
const v4 = new SharedArrayBuffer(1000, o2);
const v6 = new Uint16Array(v4);
delete v6[4257643621];
gc();
