const v1 = ~1000;
function f2() {
    return f2;
}
const v5 = Reflect.construct(f2, [Reflect,Reflect,Reflect,Reflect,Reflect]);
const o8 = {
    "maxByteLength": 5,
};
const v10 = new ArrayBuffer(5, o8);
const v12 = new Int32Array(v10);
const t10 = v12.subarray(v5, 5);
t10[0] = v1;
gc();
