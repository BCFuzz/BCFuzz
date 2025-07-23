const v1 = new WeakSet();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2(F2, v1);
const v7 = new F2(F2, v6);
function f9(a10, a11) {
    const o15 = {
        [161874.79290993954](a13, a14) {
            return a10;
        },
    };
    return v7;
}
try { f9(); } catch (e) {}
f9(v1);
f9(v7, v6);
function f19() {
    return F2;
}
f19.call(F2);
const v23 = new Int8Array(255);
for (const v24 in v23) {
    for (let i27 = -3, i28 = 10; i27 < i28; i28--) {
    }
}
gc();
