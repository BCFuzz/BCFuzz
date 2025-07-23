function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends F0 {
}
const v6 = new C5();
Reflect.defineProperty(Uint8Array, 127, v6);
gc();
