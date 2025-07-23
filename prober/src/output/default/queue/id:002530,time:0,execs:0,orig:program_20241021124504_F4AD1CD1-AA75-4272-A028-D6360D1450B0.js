function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = new Proxy(Uint32Array, v2);
v5.from(v2);
gc();
