function f0(a1, a2, a3, a4) {
    const t1 = makeMasquerader.apply();
    t1(a1, f0);
    return f0;
}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    f0(F8, F8, F8, a10);
    f0();
}
new F8(f0, F8);
new F8(f0, f0);
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
}
gc();
