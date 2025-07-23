function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        const o8 = {
            "maxByteLength": 536870887,
        };
        const v10 = new SharedArrayBuffer(129, o8);
        const v12 = new DataView(v10);
        v12.setBigInt64(536870887, F0);
    }
    const v14 = new F4();
    return v14;
}
F0.toString = f3;
try { F0.toLocaleString(f3, F0, F0); } catch (e) {}
gc();
