function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    async function* f6(a7, a8) {
        return F0;
    }
    f6(a2, a2).next(F0);
}
new F0();
gc();
