function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = /a./dvg;
    function f5() {
        return Date;
    }
    function f6(a7) {
        return a7;
    }
    Object.defineProperty(v4, Symbol.toPrimitive, { configurable: true, get: f5, set: f6 });
    const v12 = ([[v4]]).toString();
    function f14() {
        const t12 = Date(("n").fontcolor()).constructor;
        const v20 = t12().toLocaleLowerCase();
        const v22 = new Int32Array();
        for (let v23 = 0; v23 < 5; v23++) {
            v22[v20 + v12] = v23;
        }
        return "n";
    }
    const v26 = new Int32Array(257);
    v26.map(f14);
}
new F0(F0);
new F0();
new F0();
gc();
