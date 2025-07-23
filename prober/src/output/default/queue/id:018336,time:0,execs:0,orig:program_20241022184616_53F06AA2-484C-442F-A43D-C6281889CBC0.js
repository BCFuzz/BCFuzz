function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1(1221132402, F1);
function f6(a7) {
    const o9 = {
        "maxByteLength": 1221132402,
    };
    const v11 = new SharedArrayBuffer(2, o9);
    const v13 = new Float64Array(v11);
    v13.sort();
    return F1;
}
v5.constructor = f6;
const t14 = v5.constructor;
t14();
gc();
