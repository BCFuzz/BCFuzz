const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        function f10() {
            return Int32Array;
        }
        try { f10(); } catch (e) {}
        return arguments;
    }
    f8();
    return 681;
}
v2.map(f3);
gc();
