function f0() {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new String();
    Object.defineProperty(v6, "toString", { enumerable: true, value: f0 });
    new Uint8Array(v6);
}
new F1(f0, f0);
gc();
