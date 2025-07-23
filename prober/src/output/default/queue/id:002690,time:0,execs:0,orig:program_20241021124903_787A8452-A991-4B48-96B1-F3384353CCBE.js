function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v6 = new Uint8ClampedArray(10);
v6["fill"](v2, 10, 16);
gc();
