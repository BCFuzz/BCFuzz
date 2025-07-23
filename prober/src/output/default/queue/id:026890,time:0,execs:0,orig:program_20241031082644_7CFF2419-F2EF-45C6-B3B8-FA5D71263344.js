const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8(a9) {
        const v12 = new Map(a9);
        v12.set(Int32Array, v12);
        return arguments;
    }
    f8();
    return f3;
}
v2.map(f3);
gc();
