const v1 = ("").split();
function f2() {
    const o5 = {
        "maxByteLength": 3614,
    };
    const v7 = new SharedArrayBuffer(3614, o5);
    const v9 = new BigUint64Array(v7);
    function f10() {
        return createGlobalObject().Atomics.or(v9);
    }
    f10.call();
    return v1;
}
v1.toString = f2;
const v16 = [2.0,-4.0];
function f17(a18, a19, a20) {
    return a19;
}
const v21 = f17(v16, f2, v1);
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    try { a27.constructor(v1); } catch (e) {}
}
new F22(v16, f17, v21, F22);
gc();
