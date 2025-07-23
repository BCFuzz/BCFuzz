const o5 = {
    "maxByteLength": 824,
};
const v7 = new ArrayBuffer(19, o5);
const v8 = new Uint16Array(v7, Int16Array, 3);
for (let i12 = 0, i13 = 10; Reflect.deleteProperty(v8, i13), v7.resize(), Reflect.construct(Int32Array, [o5,o5,o5]) < i13;) {
    i13--;
}
gc();
