const v1 = new BigInt64Array();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = ["YlW","YlW","YlW"];
    function f10() {
        return v1;
    }
    function f11(a12) {
        return 904623.0599490013;
    }
    Object.defineProperty(v9, "currencyDisplay", { configurable: true, get: f10, set: f11 });
    const v13 = ["YlW",904623.0599490013];
    try { v13.toLocaleString("YlW", v9); } catch (e) {}
}
new F2();
gc();
