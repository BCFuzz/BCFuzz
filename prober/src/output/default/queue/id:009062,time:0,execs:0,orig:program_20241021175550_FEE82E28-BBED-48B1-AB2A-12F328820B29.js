const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        return arguments;
    }
    Object.defineProperty(f8(), 9, { configurable: true, set: f8 });
    a5 % -4096;
    return f8;
}
v2.map(f3);
gc();
