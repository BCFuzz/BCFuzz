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
        function f12() {
            return 536870887;
        }
        const v13 = new DataView(v10);
        v13.setBigInt64(536870887, F0);
    }
    new F4();
    class C16 {
    }
    return f3;
}
F0.toString = f3;
try { F0.toLocaleString(f3, f3, F0); } catch (e) {}
gc();
