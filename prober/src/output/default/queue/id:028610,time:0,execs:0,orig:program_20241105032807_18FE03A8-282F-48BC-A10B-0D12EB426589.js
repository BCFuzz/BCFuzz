const o5 = {
    "maxByteLength": 824,
};
const v7 = new ArrayBuffer(257, o5);
const v8 = new Float32Array(v7, Uint8Array, 3);
for (let i12 = 0, i13 = 10; i12 in v8, v7.resize(), Reflect.construct(Int32Array, []) < i13;) {
    i13--;
}
gc();
