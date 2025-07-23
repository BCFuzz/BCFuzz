function f0() {
    const o8 = {
        o(a2, a3) {
            function f4() {
                a2();
                return f4;
            }
            Object.defineProperty(a2, Symbol.iterator, { get: f4 });
            return f0;
        },
    };
    o8.o(f0);
    return f0;
}
f0();
try { new BigUint64Array(f0); } catch (e) {}
gc();
