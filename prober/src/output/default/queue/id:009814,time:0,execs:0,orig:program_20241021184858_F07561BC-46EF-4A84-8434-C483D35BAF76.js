function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [];
    const v3 = [-572867068,-935637352];
    Object.defineProperty(v3, 5, { configurable: true, enumerable: true, value: v2 });
    with (v3) {
        length = v2;
    }
}
new F0();
gc();
