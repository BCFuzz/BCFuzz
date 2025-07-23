function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
v2[8] ^= 128;
Object.defineProperty(v2, 2317036834, { writable: true, value: v2 });
gc();
