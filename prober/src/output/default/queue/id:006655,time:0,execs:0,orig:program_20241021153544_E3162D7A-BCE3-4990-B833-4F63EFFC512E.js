const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f9() {
        return a7;
    }
    Object.defineProperty(arguments, "valueOf", { configurable: true, get: f9 });
    eval();
    return 681;
}
v2.map(f3);
gc();
