const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    arguments[2] = arguments;
    function f9() {
        a6 = undefined;
        return a4;
    }
    const v11 = arguments[2];
    v11[1];
    v11[1] = v11;
    v11[0];
    return f3;
}
v2.map(f3);
gc();
