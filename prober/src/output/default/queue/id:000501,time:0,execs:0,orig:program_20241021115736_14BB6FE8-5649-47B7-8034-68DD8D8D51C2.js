function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4294967297;
    this.g = -4294967297;
}
const v3 = new F0();
let o4 = {
};
let {"d":v5,...v6} = v3;
Math.max(o4++);
gc();
