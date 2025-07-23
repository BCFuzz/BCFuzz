class C0 {
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(a5, a6); } catch (e) {}
    -a5;
}
const v10 = new F2(1000000000000.0, 1000000000000.0, C0);
new F2(v10, v10, 1000000000000.0);
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
gc();
