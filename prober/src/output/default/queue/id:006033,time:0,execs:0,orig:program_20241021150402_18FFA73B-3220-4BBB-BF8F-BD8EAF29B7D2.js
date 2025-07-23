function f0() {
    const o5 = {
        o() {
            const v4 = new Int32Array(129, 129, 129);
            Object.defineProperty(v4, 129, { configurable: true, set: f0 });
            return Int32Array;
        },
    };
    return o5;
}
const v6 = f0();
try { v6.o(); } catch (e) {}
gc();
