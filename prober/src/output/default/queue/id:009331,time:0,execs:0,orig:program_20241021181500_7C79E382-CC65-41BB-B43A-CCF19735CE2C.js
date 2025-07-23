const v1 = new Set();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v1;
}
const v5 = new F2(F2);
const v7 = Math.pow(F2, Set);
function f8(a9, a10, a11) {
    v5.g ^= v7;
    for (let i = 0; i < 250; i++) {
    }
    return v7;
}
f8(Set, v5, v7);
gc();
