function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(F0, this, a4, F0, a4); } catch (e) {}
    const o14 = {
        valueOf(a10, a11, a12) {
            return a10 <= 45697n;
        },
    };
    o14.valueOf(1000n);
}
new F0(F0, F0, F0);
gc();
