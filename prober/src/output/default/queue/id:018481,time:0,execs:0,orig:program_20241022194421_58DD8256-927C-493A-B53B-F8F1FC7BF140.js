const o3 = {
    "maxByteLength": 3576,
};
const v5 = new ArrayBuffer(58, o3);
const v7 = new Uint16Array(v5);
delete v7[-9077];
gc();
