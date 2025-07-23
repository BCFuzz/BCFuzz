function f1(a2, a3) {
    return a3 / a3;
}
BigUint64Array.toString = f1;
const v6 = createGlobalObject();
try { v6.load(BigUint64Array); } catch (e) {}
for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
}
gc();
