const v1 = new Uint8Array(Uint8Array);
const v4 = new BigUint64Array(732);
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11(a12, a13) {
        v1.set(v4);
        return a9;
    }
    Object.defineProperty(this, "constructor", { enumerable: true, value: f11 });
    try { this.constructor(Uint8Array); } catch (e) {}
    for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
    }
}
new F5(732, BigUint64Array, BigUint64Array, v4);
gc();
