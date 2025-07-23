function f0() {
    return f0;
}
const v1 = f0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a4(); } catch (e) {}
}
new F2(v1, v1);
new F2(F2);
for (let v9 = 0; v9 < 250; v9++) {
}
gc();
