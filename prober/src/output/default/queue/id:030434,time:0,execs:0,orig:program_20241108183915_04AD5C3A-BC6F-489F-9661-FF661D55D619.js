class C1 {
    e = Uint32Array;
}
const v2 = new C1();
const v3 = v2.e;
const o8 = {
    "maxByteLength": 824,
};
const v10 = new ArrayBuffer(19, o8);
const v11 = new v3(v10, Int16Array, 3);
for (let i15 = 0, i16 = 10; Reflect.deleteProperty(v11, i16), v10.resize(i15), Reflect.construct(Int32Array, [v2]) < i16;) {
    i16--;
}
gc();
