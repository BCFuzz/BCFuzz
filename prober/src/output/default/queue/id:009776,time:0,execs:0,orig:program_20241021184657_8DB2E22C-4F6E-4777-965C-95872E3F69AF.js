const v1 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
v1.enumerable = 256;
function f2(a3, a4) {
    Reflect.defineProperty(Uint8Array, a3, v1);
    return a3;
}
f2.call(v1);
gc();
