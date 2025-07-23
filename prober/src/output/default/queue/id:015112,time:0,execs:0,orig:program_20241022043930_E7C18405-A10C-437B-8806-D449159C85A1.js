function f0(a1) {
    return a1;
}
const v3 = createGlobalObject();
const v6 = v3.Float16Array.from(f0(f0));
const v9 = new Int32Array(681);
function f10(a11, a12, a13, a14) {
    function F15(a17, a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        new Int16Array(v6);
    }
    new F15(f10, v3, a13);
    return v3;
}
v9.map(f10);
gc();
