function f0() {
    return f0;
}
const v3 = new Uint32Array(167);
for (const v4 in v3) {
    function f5(a6, a7, a8, a9) {
        arguments[Symbol.toStringTag] = a8;
        function f13(a14, a15) {
            a14.length = a14;
            a14.toString = f0;
            return arguments;
        }
        f13(arguments);
        return a6;
    }
    f5(v4, 167, 167, f5);
}
gc();
