class C2 extends Set {
}
const v3 = new C2();
const v4 = new C2();
const v5 = new C2();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a10.add(-10n);
}
new F6(-10n, v3, v5);
new F6(-10n, v4, v3);
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();
