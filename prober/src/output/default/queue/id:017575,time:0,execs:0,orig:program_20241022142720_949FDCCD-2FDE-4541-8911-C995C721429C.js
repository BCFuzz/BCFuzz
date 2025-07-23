function f0(a1, a2) {
    try { a1(a2, a1); } catch (e) {}
    with (Symbol.toPrimitive) {
        function F6(a8, a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            new Int16Array(13461409);
        }
        new F6(F6, F6, F6, f0);
    }
    return f0;
}
for (let i = 0; i < 10; i++) {
    f0(f0);
}
gc();
