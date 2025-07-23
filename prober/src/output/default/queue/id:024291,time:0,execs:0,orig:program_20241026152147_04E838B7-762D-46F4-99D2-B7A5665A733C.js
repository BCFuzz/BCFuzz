const v2 = new Uint8Array(7);
const v5 = new Int32Array(Uint32Array);
function f6() {
    return f6;
}
function f7(a8) {
    return v2;
}
f6[Symbol.species] = f7;
Object.defineProperty(v5, "constructor", { configurable: true, enumerable: true, get: f6 });
v5.slice();
gc();
