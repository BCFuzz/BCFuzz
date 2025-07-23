const o2 = {
    "maxByteLength": 2580,
};
const v4 = new SharedArrayBuffer(2580, o2);
const v6 = new Uint8Array(v4);
const t5 = createGlobalObject().Float16Array;
const v10 = new t5();
const t7 = v10.constructor;
new t7(v6);
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
for (let i25 = 0, i26 = 10; i26--, i25 < i26;) {
}
gc();
