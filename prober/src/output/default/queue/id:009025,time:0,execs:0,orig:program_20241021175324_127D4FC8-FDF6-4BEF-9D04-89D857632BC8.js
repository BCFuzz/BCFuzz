class C0 {
}
const v1 = new C0();
function f2(a3) {
    function f4(a5, a6) {
        return a6;
    }
    return f4;
}
v1[Symbol.toPrimitive] = f2;
const v10 = new Uint32Array();
const t11 = v10.constructor;
const v12 = new t11();
try { v12.join(v1); } catch (e) {}
gc();
