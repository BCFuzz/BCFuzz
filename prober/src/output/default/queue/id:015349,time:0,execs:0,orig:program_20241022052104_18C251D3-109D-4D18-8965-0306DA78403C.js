const v1 = new Int8Array(Int8Array, Int8Array, Int8Array);
class C2 {
}
const v3 = new C2();
function f4() {
    return v1.__proto__;
}
v3.constructor = f4;
const v6 = v3.constructor;
const v7 = v6(C2, C2, v6, f4, Int8Array);
function f8(a9, a10) {
    return a9;
}
v7.constructor = f8;
const v11 = new Int8Array();
v11.slice();
gc();
