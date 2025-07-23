const v2 = new Int32Array();
const o5 = {
    "maxByteLength": 268435440,
};
const v7 = new ArrayBuffer(8, o5);
const v9 = new BigUint64Array(v7);
let v11;
try { v11 = new Uint32Array(...v9); } catch (e) {}
v2[13n] = v11;
gc();
