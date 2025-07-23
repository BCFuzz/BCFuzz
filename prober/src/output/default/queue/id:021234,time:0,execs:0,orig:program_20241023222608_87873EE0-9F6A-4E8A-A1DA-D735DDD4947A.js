const v1 = new Int8Array(Int8Array);
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, "f", { writable: true, configurable: true, enumerable: true, value: v1 });
    delete this.f;
}
const v11 = new F6(F6, v1);
this.constructor.defineProperties(F2, v11);
gc();
