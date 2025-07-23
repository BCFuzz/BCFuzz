const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8(a9) {
        const v12 = new Map();
        v12.set(a9, v12);
        return arguments;
    }
    f8(a7);
}
v2.map(f3);
gc();
