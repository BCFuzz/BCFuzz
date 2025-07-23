function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        const o8 = {
            "maxByteLength": 536870887,
        };
        const v11 = new ArrayBuffer();
        const v13 = new DataView(v11);
        v13.__proto__;
        const v15 = new SharedArrayBuffer(129, o8);
        const v16 = new DataView(v15);
        v16.setBigInt64(536870887, F0);
    }
    new F4();
    return f3;
}
F0.toString = f3;
try { F0.toLocaleString(); } catch (e) {}
gc();
