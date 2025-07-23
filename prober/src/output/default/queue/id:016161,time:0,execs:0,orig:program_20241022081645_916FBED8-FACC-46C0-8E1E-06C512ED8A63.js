const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        function f10() {
        }
        for (let v11 = 0; v11 < 10; v11++) {
            f10();
        }
        return arguments;
    }
    f8();
    return f3;
}
v2.map(f3);
gc();
