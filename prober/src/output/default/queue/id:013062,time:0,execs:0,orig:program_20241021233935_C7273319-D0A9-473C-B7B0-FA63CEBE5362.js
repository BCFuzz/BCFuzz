function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends F1 {
}
const v7 = new C6();
v7.writable = 1e-15;
Reflect.defineProperty(Uint8Array, 127, v7);
gc();
