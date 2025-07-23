class C0 {
}
const v1 = new C0();
const v5 = Reflect.defineProperty(Uint8Array, undefined, v1);
const v6 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
function f7(a8, a9) {
    return v5;
}
v6.set = f7;
function f10(a11, a12) {
    Reflect.defineProperty(Uint8Array, a11, v6);
    return Uint8Array;
}
f10.call();
gc();
