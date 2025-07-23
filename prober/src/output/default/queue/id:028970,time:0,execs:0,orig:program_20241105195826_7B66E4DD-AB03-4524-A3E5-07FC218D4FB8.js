const v1 = [2.0,-4.0];
function f2(a3, a4, a5) {
    return a5;
}
const v6 = f2(f2, f2, runString);
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a12(F7, F7, F7, this); } catch (e) {}
}
F7.prototype = F7;
Object.defineProperty(F7, "constructor", { enumerable: true, value: runString });
new F7(v1, f2, v6, F7);
gc();
