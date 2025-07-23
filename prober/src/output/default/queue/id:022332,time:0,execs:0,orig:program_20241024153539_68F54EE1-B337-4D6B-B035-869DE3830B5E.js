const v2 = createGlobalObject();
const v3 = v2.Float16Array;
const v5 = new Uint8Array(v2);
const o7 = {
    "maxByteLength": 193709389,
};
const v9 = new ArrayBuffer(95, o7);
const v10 = new v3(v9);
v10.set(v5);
gc();
