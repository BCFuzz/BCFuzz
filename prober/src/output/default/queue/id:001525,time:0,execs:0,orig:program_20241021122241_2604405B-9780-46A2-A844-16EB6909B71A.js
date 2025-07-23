function f0() {
    return f0;
}
const v1 = f0.bind(f0, f0);
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    v1.toLocaleString();
}
new F2(v1, F2, v1);
new F2();
gc();
