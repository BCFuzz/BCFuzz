function f2() {
    const o11 = {
        set d(a4) {
        },
        toString(a6, a7, a8, a9) {
            return a7;
        },
        [Date]: f2,
        "unscopables": 3661,
        next() {
            return f2;
        },
    };
    return o11;
}
const v12 = f2();
const v13 = f2();
const v14 = f2();
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    const v19 = this.constructor;
    try { new v19(F15); } catch (e) {}
    a17.e = a17;
}
new F15(v14);
new F15(v13);
new F15(v12);
gc();
