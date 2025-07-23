const v1 = 0.4064352496610042 / 0.4064352496610042;
function f3() {
    return v1;
}
class C4 extends f3 {
}
const v5 = new C4();
const o9 = {
    "maxByteLength": 12,
};
const v11 = new ArrayBuffer(5, o9);
const v12 = new Int8Array(v11, Int8Array, v1);
v12[v5] = 1.7976931348623157e+308;
gc();
