function f0() {
    const o7 = {
        o(a2, a3) {
            function f4() {
                return a3;
            }
            Object.defineProperty(a2, Symbol.iterator, { get: f4 });
            return f4;
        },
    };
    let v8;
    try { v8 = o7.o(f0); } catch (e) {}
    return v8;
}
f0();
f0();
gc();
