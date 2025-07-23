const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        function f10() {
            return arguments;
        }
        function f11(a12) {
            return arguments;
        }
        f10.toString = f11;
        f10.toString(a5).length;
        return arguments;
    }
    f8();
    return a7;
}
v2.map(f3);
gc();
