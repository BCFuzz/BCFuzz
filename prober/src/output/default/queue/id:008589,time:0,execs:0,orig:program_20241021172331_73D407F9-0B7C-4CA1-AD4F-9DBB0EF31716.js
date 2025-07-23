const v2 = ([8,8,8]).slice(8);
const o5 = {
    "maxByteLength": 3227715239,
};
const v7 = new ArrayBuffer(15, o5);
const v9 = new DataView(v7);
v9.setFloat32(8, v2);
gc();
