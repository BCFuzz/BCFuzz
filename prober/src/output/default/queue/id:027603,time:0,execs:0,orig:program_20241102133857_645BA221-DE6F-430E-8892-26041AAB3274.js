const v1 = new SharedArrayBuffer();
class C2 {
}
const v3 = new C2();
function f4() {
    return v1.__proto__;
}
v3.constructor = f4;
const t8 = v3.constructor;
const v7 = t8();
function f8(a9, a10) {
    return f4;
}
v7.constructor = f8;
const v11 = new SharedArrayBuffer();
v11.slice();
gc();
