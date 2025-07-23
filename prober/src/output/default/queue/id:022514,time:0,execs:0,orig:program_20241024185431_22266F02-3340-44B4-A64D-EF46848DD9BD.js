const v2 = new BigUint64Array();
const v3 = v2.buffer;
function f4() {
    return Uint16Array;
}
function f5(a6) {
    try { a6.from(v2); } catch (e) {}
    return f4;
}
Object.defineProperty(v3, 8, { enumerable: true, get: f4, set: f5 });
v3.transferToFixedLength();
class C9 {
}
const v10 = new C9();
function f11(a12) {
    v3[8] = Uint16Array;
    return a12;
}
v10.constructor = f11;
const t19 = v10.constructor;
t19();
gc();
