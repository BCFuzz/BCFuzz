function F0() {
    if (!new.target) { throw 'must be called with new'; }
    delete this[2];
    delete this[F0];
}
new F0();
new F0();
new F0();
const v9 = new Uint8ClampedArray(255);
for (const v10 in v9) {
}
gc();
