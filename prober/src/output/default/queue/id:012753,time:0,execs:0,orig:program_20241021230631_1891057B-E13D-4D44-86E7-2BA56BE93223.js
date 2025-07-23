class C2 {
}
const v4 = new Float32Array("NaN", Float32Array, 9007199254740992n);
class C5 extends C2 {
}
const v6 = new C5();
function f7(a8, a9) {
    Object.defineProperty(v4, "NaN", { writable: true, enumerable: true, value: 9007199254740992n });
    return "NaN";
}
v6.constructor = f7;
const v10 = v6.constructor;
try { v10(); } catch (e) {}
gc();
