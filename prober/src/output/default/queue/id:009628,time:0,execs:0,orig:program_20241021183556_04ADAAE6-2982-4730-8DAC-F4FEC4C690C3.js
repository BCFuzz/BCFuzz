function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = [1754061190,16,11,256,-62769,-256,8];
    function f7() {
        return F0;
    }
    const o8 = {
        __proto__: v6,
    };
    Object.defineProperty(v6, 10, { configurable: true, set: f7 });
}
new F0(F0, F0, F0, F0);
new F0();
gc();
