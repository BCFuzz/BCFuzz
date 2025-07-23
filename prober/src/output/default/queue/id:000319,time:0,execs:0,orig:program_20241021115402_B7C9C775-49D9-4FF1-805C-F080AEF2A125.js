function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 257;
}
new F0();
new F0();
new Float32Array(16);
const o12 = {
};
const o13 = {
};
o13.e = Float32Array;
o13.c = Int32Array;
const o14 = {
};
gc();
