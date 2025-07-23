const v2 = new Uint8Array(3384);
class C3 {
}
const v4 = new C3();
function f5() {
    const v6 = /XF(?:a*)*/mis;
    return v6.test(v6);
}
const t8 = v4.constructor;
const v9 = new t8();
v9.valueOf = f5;
const v10 = v9 + v2;
try { eval(v10); } catch (e) {}
gc();
