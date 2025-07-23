const v0 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
function f1() {
    return f1;
}
Object.defineProperty(v0, "set", { configurable: true, enumerable: true, get: f1 });
function f2(a3, a4) {
    Reflect.defineProperty(Uint8Array, a3, v0);
    return a4;
}
f2.call();
gc();
