const v0 = [];
function f1() {
    return f1;
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(v0, 2147483647, { configurable: true, set: f1 });
    v0.length = 9;
}
new F2(f1, f1, f1);
gc();
