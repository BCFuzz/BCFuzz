const o2 = {
    "maxByteLength": 624,
};
const v4 = new SharedArrayBuffer(624, o2);
const v6 = new Uint16Array(v4);
v6.reverse();
gc();
