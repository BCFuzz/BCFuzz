function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(1024n); } catch (e) {}
    a3 % a3;
    const v7 = ~1024n;
    const o8 = {
    };
    const o9 = {
    };
    o9.d = v7;
    const o10 = {
    };
    const o11 = {
    };
}
new F1(1024n);
new F1(1024n);
gc();
