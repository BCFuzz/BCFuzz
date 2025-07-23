class C0 {
}
const v1 = new C0();
const v2 = new C0();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = a9 / a9;
    v12 * v12;
    this.__lookupSetter__.call(a11);
}
new F6(v2, -1286853293n, -28330n, C0);
new F6(C0, 10n, -28330n, v1);
function f18(a19, a20, a21) {
    const o27 = {
        n(a23, a24, a25, a26) {
            a25[4] = a25;
            return f18;
        },
    };
    const t19 = o27.constructor;
    t19(a21);
    return o27;
}
class C30 extends f18 {
}
const v31 = new C30();
try { v31.n(); } catch (e) {}
gc();
