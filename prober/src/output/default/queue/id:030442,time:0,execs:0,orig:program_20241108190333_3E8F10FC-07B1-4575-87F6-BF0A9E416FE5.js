class C1 {
    e = Uint32Array;
}
const v2 = new C1();
const v3 = v2.e;
const v4 = new v3();
const o9 = {
    "maxByteLength": 824,
};
const v11 = new ArrayBuffer(19, o9);
const v12 = new v3(v11, Int16Array, 3);
for (let i16 = 0, i17 = 10; v11.resize(i17), Reflect.construct(Int32Array, [ArrayBuffer,ArrayBuffer,ArrayBuffer,ArrayBuffer]) < i17;) {
    i17--;
}
v12[142] = v4;
gc();
