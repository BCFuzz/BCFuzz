const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        -(3 || -4294967297);
        return arguments;
    }
    f8();
    return a5;
}
v2.map(f3);
gc();
