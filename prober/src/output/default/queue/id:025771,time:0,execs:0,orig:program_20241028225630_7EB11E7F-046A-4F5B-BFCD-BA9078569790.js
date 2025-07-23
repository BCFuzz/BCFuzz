const v1 = [444.8679377264514];
const o4 = {
    "maxByteLength": 9,
};
const v6 = new SharedArrayBuffer(9, o4);
const v7 = new Uint32Array(v6);
v7.set(v1);
gc();
