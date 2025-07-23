for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function f10() {
    eval.defineProperty = eval;
    f10 = eval;
    return eval;
}
f10(f10, f10, f10, f10);
const v15 = Proxy.revocable(f10, f10).proxy;
const v17 = this.constructor;
try { v17.freeze(v15); } catch (e) {}
for (let i21 = -2976, i22 = 10; i21 !== i22; i22--) {
}
gc();
