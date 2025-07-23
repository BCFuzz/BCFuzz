let v2;
try { v2 = (11695n).call(); } catch (e) {}
const o5 = {
    "maxByteLength": 11,
};
const v7 = new SharedArrayBuffer(11, o5);
const v8 = new Uint16Array(v7);
v8.constructor = v2;
v8.subarray(11, 11);
gc();
