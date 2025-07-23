const o2 = {
    "maxByteLength": 58,
};
const v4 = new ArrayBuffer(58, o2);
const v6 = new Uint8Array(58, 58, 58);
const t5 = v6.slice(58, 58).constructor;
const v9 = new t5(v4, 58, Uint8Array);
v9.sort();
gc();
