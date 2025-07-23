function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
const o6 = {
    "maxByteLength": 2312845920,
};
const v8 = new ArrayBuffer(5, o6);
const v10 = new Int8Array(v8);
v10[v2] = 1.7976931348623157e+308;
gc();
