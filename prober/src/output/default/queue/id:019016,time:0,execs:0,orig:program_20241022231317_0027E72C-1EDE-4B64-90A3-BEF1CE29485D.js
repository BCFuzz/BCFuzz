function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const o13 = {
        valueOf(a8, a9, a10) {
            try { this.valueOf(-2147483648); } catch (e) {}
            return a8 <= 45697n;
        },
    };
    o13.valueOf();
}
new F1();
gc();
