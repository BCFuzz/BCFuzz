const v3 = new BigInt64Array(16);
class C4 {
    constructor(a6) {
        v3.with(4, delete this.c);
    }
}
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a13(); } catch (e) {}
}
const v15 = new F9(F9, C4, BigInt64Array);
new F9(v15, C4, C4);
gc();
