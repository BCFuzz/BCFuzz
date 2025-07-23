function f0(a1, a2, a3) {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    F5 < 10;
    return arguments;
}
f0(f0, f0, f0);
const v12 = new BigUint64Array(586);
for (const v13 of v12) {
}
gc();
