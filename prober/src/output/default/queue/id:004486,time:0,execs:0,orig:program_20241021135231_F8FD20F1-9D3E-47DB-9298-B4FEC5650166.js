const v0 = [];
const o7 = {
    set d(a2) {
        try { a2.toString(); } catch (e) {}
    },
    toString(a5) {
        Object.defineProperty(v0, "length", { configurable: true, enumerable: true, get: gc });
        return a5;
    },
};
o7.d = o7;
gc();
