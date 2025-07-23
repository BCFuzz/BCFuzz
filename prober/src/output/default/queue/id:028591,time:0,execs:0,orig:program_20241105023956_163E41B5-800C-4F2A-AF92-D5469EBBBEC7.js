function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new Int32Array(681);
function f9(a10, a11, a12, a13) {
    function f14(a15) {
        const v18 = new Map(a13);
        v18.get(F0);
        return arguments;
    }
    f14(a10);
}
v8.map(f9);
gc();
