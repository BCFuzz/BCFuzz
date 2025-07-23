class C2 {
    [462360040n];
}
const v3 = new C2();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11, a12) {
        try { a9.constructor(); } catch (e) {}
        a10[462360040];
        return a10;
    }
    f8(F4, -34213912n);
    for (let i = 0; i < 5; i++) {
        f8(this, v3);
    }
}
new F4(C2, -34213912n);
const v18 = new F4();
const t18 = v18.constructor;
new t18();
gc();
