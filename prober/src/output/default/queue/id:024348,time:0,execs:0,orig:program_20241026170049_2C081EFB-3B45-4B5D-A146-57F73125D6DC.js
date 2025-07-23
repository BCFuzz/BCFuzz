function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new Int32Array(681);
function f9(a10, a11, a12, a13) {
    function f14() {
        const t6 = [F0];
        t6[1] = a11;
        return arguments;
    }
    f14.apply();
    return a13;
}
v8.map(f9);
gc();
