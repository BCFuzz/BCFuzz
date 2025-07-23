const o5 = {
    "maxByteLength": 824,
};
const v7 = new ArrayBuffer(19, o5);
const v8 = new Uint16Array(v7, Int16Array, 3);
for (let i12 = 0, i13 = 10; v7.resize(i12), Reflect.construct(Int32Array, []) < i13;) {
    i13--;
}
v8[256];
gc();
