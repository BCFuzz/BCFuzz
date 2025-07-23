function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0(F0, F0, F0);
const v7 = new Map();
function f8(a9, a10) {
    const o16 = {
        "e": a10,
        "b": v7,
        "h": a10,
        1769044588: v5,
        m(a12, a13, a14) {
            return super.acosh();
        },
    };
    return f8;
}
class C17 {
    get c() {
        f8(this.constructor);
        return this;
    }
}
const v21 = new C17();
function f22() {
    return v7;
}
v21.constructor = f22;
const v25 = new BigUint64Array(586);
for (const v26 of v25) {
    v21.c;
}
gc();
