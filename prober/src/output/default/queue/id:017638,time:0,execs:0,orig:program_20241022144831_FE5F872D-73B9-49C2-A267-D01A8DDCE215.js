function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7) {
        return a2;
    }
    f5();
    for (let i = 0; i < 100; i++) {
        f5();
        new f5();
    }
}
const v11 = new F0(F0, F0);
const t12 = v11.constructor;
new t12();
gc();
