const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
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
    return a10;
}
v7.constructor = f8;
const v11 = new Int16Array();
v11.slice();
gc();
