class C0 {
    constructor(a2) {
        this.f = C0;
        delete this.f;
    }
}
const v4 = new C0();
const v5 = new C0();
function f6(a7, a8, a9) {
    const o17 = {
        toString(a11, a12, a13) {
            JSON["stringify"](this);
            return a11;
        },
        [a8]: a8,
    };
    return o17;
}
f6(v4, f6(v5, v4));
gc();
