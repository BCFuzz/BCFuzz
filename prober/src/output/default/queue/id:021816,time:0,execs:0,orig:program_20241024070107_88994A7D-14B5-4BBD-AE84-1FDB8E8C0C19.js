const v0 = /(?<a>.)foo[z]*/dv;
function f1(a2, a3) {
    a2.ignoreCase;
    const o5 = {
        __proto__: v0,
    };
    return o5;
}
const v6 = f1(v0);
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f1;
}
const v13 = new F7(F7, F7, v6, v0);
const v14 = v13.e;
try { v14(v6); } catch (e) {}
gc();
