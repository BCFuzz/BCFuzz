const o2 = {
    "maxByteLength": 1862,
};
const v4 = new ArrayBuffer(1862, o2);
const v6 = new Int16Array(v4);
v6[1862] ||= 1862;
gc();
