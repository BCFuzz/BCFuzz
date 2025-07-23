const v0 = /(?<a>.)foo[z]*/dv;
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a3, "lastIndex", { enumerable: true, value: a4 });
}
try { new F1(v0); } catch (e) {}
gc();
