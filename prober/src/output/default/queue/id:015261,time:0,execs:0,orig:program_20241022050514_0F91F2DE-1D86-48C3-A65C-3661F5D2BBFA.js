function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new ArrayBuffer(213);
    const v8 = new Int8Array(v6);
    v8.includes(F0, a2);
}
function f11() {
    function f12(a13) {
        return -1000.0;
    }
    return f12;
}
function f15(a16) {
    return f15;
}
Object.defineProperty(Reflect, "toString", { configurable: true, get: f11, set: f15 });
Reflect.construct(F0, [Reflect]);
gc();
