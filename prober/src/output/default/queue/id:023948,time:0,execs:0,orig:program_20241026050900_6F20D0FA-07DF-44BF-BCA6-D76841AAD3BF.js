for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v11 = new Uint8Array(Uint8Array);
function f12() {
    return Int16Array;
}
function f14(a15) {
    return f12;
}
Object.defineProperty(v11, "constructor", { configurable: true, enumerable: true, get: f12, set: f14 });
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    a18.slice();
}
new F16(v11);
gc();
