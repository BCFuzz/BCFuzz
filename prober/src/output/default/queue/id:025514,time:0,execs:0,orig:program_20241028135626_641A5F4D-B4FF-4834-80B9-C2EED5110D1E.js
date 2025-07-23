const o4 = {
    "maxByteLength": 760,
};
const v6 = new ArrayBuffer(512, o4);
const v8 = new Uint8ClampedArray(v6, 5, 5);
const t5 = v8.reverse();
t5[1] = 2147483647;
gc();
