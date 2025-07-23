function f0(a1, a2) {
    with (Symbol.toPrimitive) {
        function F6(a8, a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F6(description);
    }
    for (let v13 = 0; v13 < 5; v13++) {
    }
    return f0;
}
for (let i = 0; i < 10; i++) {
    f0(f0, f0);
}
gc();
