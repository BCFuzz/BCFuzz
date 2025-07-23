function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        const o17 = {
            n(a9, a10, a11) {
                const v12 = this;
                const t9 = v12.Intl.DateTimeFormat;
                t9().format();
                return f3;
            },
        };
        const v18 = o17.n;
        for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
        }
        v18();
        const o30 = {
            "maxByteLength": 536870887,
        };
        const v32 = new SharedArrayBuffer(129, o30);
        const v34 = new DataView(v32);
        v34.setBigInt64(536870887, F0);
    }
    const v36 = new F4();
    return v36;
}
F0.toString = f3;
try { F0.toLocaleString(); } catch (e) {}
gc();
