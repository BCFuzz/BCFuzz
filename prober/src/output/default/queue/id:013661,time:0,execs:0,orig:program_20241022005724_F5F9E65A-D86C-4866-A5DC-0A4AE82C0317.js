const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        function f10() {
            return f3;
        }
        f10.e = f10;
        return arguments;
    }
    f8();
}
v2.map(f3);
gc();
