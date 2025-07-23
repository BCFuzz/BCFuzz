const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f9(a10) {
        let v11 = [-1.7976931348623157e+308];
        ++v11;
        Math.abs(v11);
        return a4;
    }
    arguments.toString = f9;
    return arguments;
}
v2.map(f3);
gc();
