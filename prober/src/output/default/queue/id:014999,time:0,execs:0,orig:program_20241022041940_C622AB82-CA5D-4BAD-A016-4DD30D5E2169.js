const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
const o7 = {
    n(a3, a4, a5) {
        const v6 = new Int32Array();
        Object.defineProperty(v6, 4294967296, { writable: true, configurable: true, enumerable: true, value: v1 });
        return Int32Array;
    },
};
try { o7.n(); } catch (e) {}
gc();
