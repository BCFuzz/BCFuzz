function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
class C6 {
}
const v7 = C6.__defineSetter__;
function f8() {
    return v5;
}
const v10 = Symbol.toPrimitive;
v7[v10] = f8;
const o20 = {
    n(a12, a13, a14) {
        const v15 = this;
        const v17 = v15.Intl.RelativeTimeFormat;
        const v18 = new v17(v10, a12, this, a13, v17);
        let v19;
        try { v19 = v18.format(v7); } catch (e) {}
        return v19;
    },
};
const t22 = o20.n;
t22();
gc();
