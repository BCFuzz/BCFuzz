function f1() {
    return -2;
}
const v4 = new Uint8ClampedArray();
function f5() {
    return f1;
}
Object.defineProperty(v4, "valueOf", { configurable: true, get: f5 });
const v6 = new Uint8Array();
v6.copyWithin(v4);
gc();
