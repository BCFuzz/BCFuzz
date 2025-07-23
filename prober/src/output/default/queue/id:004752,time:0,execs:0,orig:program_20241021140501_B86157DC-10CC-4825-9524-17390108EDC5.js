function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const o12 = {
        valueOf(a8, a9, a10) {
            return a8 <= 45697n;
        },
    };
    o12.valueOf(1000n);
}
new F0();
gc();
