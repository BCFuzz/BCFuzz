const o2 = {
    "maxByteLength": 119,
};
const v4 = new SharedArrayBuffer(119, o2);
const v6 = new Int16Array(v4);
let [,v7] = v6;
gc();
