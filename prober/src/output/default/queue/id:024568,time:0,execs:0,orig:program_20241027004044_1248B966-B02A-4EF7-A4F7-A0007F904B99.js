const v3 = new Uint8Array(3384);
class C4 {
}
const v5 = new C4();
const t4 = v5.constructor;
const v7 = new t4();
function f8() {
    return null;
}
v7[Symbol.toPrimitive] = f8;
const v11 = v7 + v3;
try { eval(v11); } catch (e) {}
gc();
