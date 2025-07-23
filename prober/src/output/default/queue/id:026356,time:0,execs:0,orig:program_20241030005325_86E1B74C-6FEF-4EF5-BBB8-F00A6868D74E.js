function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = [-1000000000000.0,1000000000000.0,1000000.0,3.0,861498.0722507937];
    const o8 = {
        get length() {
            Object.defineProperty(v6, "length", { configurable: true, enumerable: true, value: this });
            return this;
        },
    };
    try { new Uint32Array(o8); } catch (e) {}
}
new F0();
gc();
