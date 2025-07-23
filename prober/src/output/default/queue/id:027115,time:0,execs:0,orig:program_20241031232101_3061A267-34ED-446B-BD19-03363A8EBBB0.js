function f1() {
    return Uint8Array;
}
function f2(a3) {
    return f2;
}
Object.defineProperty(Uint8Array, 237, { configurable: true, get: f1, set: f2 });
for (let i7 = 0, i8 = 10 + 10; i8--, i7 < i8;) {
}
const v16 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
v16.writable = v16;
Reflect.defineProperty(Uint8Array, 237, v16);
gc();
