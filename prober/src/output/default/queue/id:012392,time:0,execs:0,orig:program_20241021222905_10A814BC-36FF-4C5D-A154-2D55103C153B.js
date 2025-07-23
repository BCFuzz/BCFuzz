function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new Float32Array(4096);
    for (const v5 in v4) {
        function f7() {
            return f7;
        }
        function f8(a9, a10) {
            a9.arguments;
            return f8;
        }
        const v12 = f8(f7);
        try { v12(BigUint64Array); } catch (e) {}
    }
}
new F1();
gc();
