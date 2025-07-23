function f1() {
    return 13;
}
const o5 = {
    "maxByteLength": 65537,
};
const v7 = new ArrayBuffer(1175, o5);
const v8 = new Uint32Array(v7, f1, 13);
createGlobalObject().Atomics.xor(v8);
for (let i15 = 0, i16 = 10; i16--, i15 < i16;) {
}
gc();
