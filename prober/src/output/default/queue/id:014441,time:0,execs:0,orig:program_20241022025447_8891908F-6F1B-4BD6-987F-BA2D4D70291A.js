function f0(a1, a2, a3) {
    function f5() {
        return a3;
    }
    function f6(a7) {
        return a1;
    }
    Object.defineProperty(arguments, 8, { get: f5, set: f6 });
    function f9(a10, a11, a12) {
        a12.g = eval;
        return a10;
    }
    return arguments;
}
f0();
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();
