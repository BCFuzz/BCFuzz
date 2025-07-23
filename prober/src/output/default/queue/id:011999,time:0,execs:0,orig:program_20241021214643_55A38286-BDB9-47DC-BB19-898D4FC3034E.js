const v1 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
v1.configurable = 512;
function f2(a3, a4) {
    Reflect.defineProperty(Uint8Array, a3, v1);
    return Reflect;
}
f2.call();
gc();
