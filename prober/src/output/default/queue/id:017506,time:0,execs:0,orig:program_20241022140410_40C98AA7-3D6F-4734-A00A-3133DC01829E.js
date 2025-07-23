const v0 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
function f1(a2, a3) {
    Reflect.preventExtensions(Uint8Array);
    Reflect.defineProperty(Uint8Array, a2, v0);
    return v0;
}
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
const t8 = createGlobalObject().Float16Array;
const v22 = new t8(8);
v22.reduce(f1);
gc();
