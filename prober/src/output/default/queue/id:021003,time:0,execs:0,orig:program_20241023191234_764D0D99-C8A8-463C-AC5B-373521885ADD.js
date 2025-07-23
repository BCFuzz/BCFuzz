const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        function f10() {
            return 681;
        }
        function f11(a12) {
            Number.isNaN(a12--);
        }
        f10.toString = f11;
        f10.toString();
        return arguments;
    }
    f8();
    return f3;
}
v2.map(f3);
gc();
