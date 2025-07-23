const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        function f10() {
            return a6;
        }
        function f11(a12) {
            return a6;
        }
        f10.toString = f11;
        f10.toString()[5];
        return arguments;
    }
    f8.apply(a4);
}
v2.map(f3);
gc();
