const v0 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
function f1(a2, a3) {
    return a3;
}
v0.get = f1;
function f4(a5, a6) {
    return Reflect.defineProperty(Uint8Array, a5, v0);
}
f4.call();
gc();
