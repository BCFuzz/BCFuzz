function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        try { this.constructor(f3, F4, this); } catch (e) {}
        const o9 = {
            "maxByteLength": 536870887,
        };
        const v11 = new SharedArrayBuffer(129, o9);
        const v13 = new DataView(v11);
        v13.setBigInt64(536870887, F0);
    }
    const v15 = new F4();
    return v15;
}
F0.toString = f3;
try { F0.toLocaleString(F0, F0); } catch (e) {}
gc();
