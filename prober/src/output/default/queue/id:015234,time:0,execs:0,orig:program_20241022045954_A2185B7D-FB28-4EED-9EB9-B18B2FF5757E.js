function f1() {
    return f1;
}
class C2 extends f1 {
}
const v3 = new C2();
const o6 = {
    "maxByteLength": 1073741824,
};
const v9 = createGlobalObject().Float16Array;
const v11 = new ArrayBuffer(1622, o6);
new v9(v11, v3, "setUint8");
gc();
