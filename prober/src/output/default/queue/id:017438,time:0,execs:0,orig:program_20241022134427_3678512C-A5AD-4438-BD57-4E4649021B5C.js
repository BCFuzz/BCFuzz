function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4, a5, a6) {
    for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
        delete arguments[0];
    }
    return a4;
}
f2(F0);
gc();
