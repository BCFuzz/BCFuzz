const o2 = {
    "maxByteLength": 65535,
};
const v4 = new ArrayBuffer(12, o2);
const v6 = new Uint32Array(v4);
const t5 = createGlobalObject().Float16Array;
new t5(v6);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
