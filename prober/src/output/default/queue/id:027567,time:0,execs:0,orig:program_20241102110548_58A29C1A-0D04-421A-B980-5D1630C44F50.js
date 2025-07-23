function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    for (const v7 in this) {
        const o8 = {
        };
        this[v7] = Proxy;
        o8.construct &&= 6;
    }
    const v10 = this.constructor;
    try { new v10(); } catch (e) {}
}
new F1(6, 6, 6, 6);
gc();
