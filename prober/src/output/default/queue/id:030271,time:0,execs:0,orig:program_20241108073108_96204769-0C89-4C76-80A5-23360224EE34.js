const v1 = new Uint8Array();
const v2 = v1.constructor;
const o7 = {
    "maxByteLength": 824,
};
const v9 = new ArrayBuffer(19, o7);
const v10 = new v2(v9, Object, 3);
for (let i14 = 0, i15 = 10; Reflect.deleteProperty(v10, i15), Reflect.construct(Int32Array, [v9.resize()]) < i15;) {
    i15--;
}
gc();
