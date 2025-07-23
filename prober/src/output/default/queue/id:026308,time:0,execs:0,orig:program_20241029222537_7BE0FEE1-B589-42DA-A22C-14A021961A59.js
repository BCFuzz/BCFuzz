const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        return arguments;
    }
    a4 ||= f8();
    return Int32Array;
}
v2.map(f3);
gc();
