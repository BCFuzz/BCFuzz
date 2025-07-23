const v1 = new Date();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v1;
}
const v5 = new F2();
class C6 {
    constructor(a8, a9) {
        const v11 = v5.d.getUTCMonth;
        try { v11(); } catch (e) {}
    }
}
new C6(C6, v5);
for (let i16 = 0, i17 = 10; i16 !== i17; i17--) {
}
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
}
gc();
