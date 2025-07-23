function f0() {
    return f0;
}
const v3 = Reflect.construct(f0, [Reflect,Reflect,Reflect,Reflect,Reflect]);
const o6 = {
    "maxByteLength": 5,
};
const v8 = new ArrayBuffer(5, o6);
const v10 = new Int32Array(v8);
const v11 = v10.subarray(v3, 5);
v11[0] = v11;
gc();
