const v1 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
v1.writable = Uint32Array;
function f2(a3, a4) {
    Reflect.defineProperty(Uint8Array, a3, v1);
    return Uint8Array;
}
f2.call();
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
gc();
