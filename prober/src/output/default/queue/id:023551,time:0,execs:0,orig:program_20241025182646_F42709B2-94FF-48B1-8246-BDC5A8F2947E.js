function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2();
function f7(a8) {
    const o10 = {
        "maxByteLength": 1221132402,
    };
    const v12 = new SharedArrayBuffer(42977, o10);
    const v13 = new Float64Array(v12);
    return v13.sort();
}
v6.constructor = f7;
const t13 = v6.constructor;
t13();
gc();
