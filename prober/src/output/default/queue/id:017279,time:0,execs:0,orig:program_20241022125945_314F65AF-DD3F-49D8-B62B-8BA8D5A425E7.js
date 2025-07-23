const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        function f10() {
        }
        function f11(a12) {
            return arguments;
        }
        f10.toString = f11;
        const v13 = f10.toString();
        v13.f = v13;
        const v14 = v13.callee();
        v14[0] = v14;
        return arguments;
    }
    f8();
}
v2.map(f3);
gc();
