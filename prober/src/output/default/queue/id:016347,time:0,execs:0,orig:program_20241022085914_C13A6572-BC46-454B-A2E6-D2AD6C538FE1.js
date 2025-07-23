const v3 = new Int32Array(681);
function f4(a5, a6, a7, a8) {
    function f9() {
        function f11() {
            return f9;
        }
        return f11.apply(BigInt64Array, arguments);
    }
    return f9();
}
v3.map(f4);
gc();
