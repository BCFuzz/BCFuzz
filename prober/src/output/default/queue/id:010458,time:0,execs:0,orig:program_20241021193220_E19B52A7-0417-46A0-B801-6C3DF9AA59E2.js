const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f9(a10, a11) {
        const o12 = {
            ...arguments,
        };
        return o12;
    }
    f9();
    f9(a5, a7);
    return a7;
}
v2.map(f3);
gc();
