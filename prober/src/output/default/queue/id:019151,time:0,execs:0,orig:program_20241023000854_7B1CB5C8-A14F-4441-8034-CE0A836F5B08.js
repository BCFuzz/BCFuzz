class C0 {
}
const v1 = new C0();
const v5 = Reflect.defineProperty(Uint8Array, undefined, v1);
const v6 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
v6.enumerable = v5;
function f7(a8, a9) {
    Reflect.defineProperty(Uint8Array, a8, v6);
    return a8;
}
f7.call();
gc();
