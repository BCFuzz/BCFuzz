function f1() {
    return 1000;
}
Object.defineProperty(SharedArrayBuffer, "valueOf", { enumerable: true, value: f1 });
const v3 = new SharedArrayBuffer(SharedArrayBuffer);
const v5 = new Float64Array(v3);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = new Uint8Array(v3);
    v11.set(v5);
}
new F6(v5, F6);
gc();
