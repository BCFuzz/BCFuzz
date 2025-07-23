function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const o6 = {
        n(a3, a4, a5) {
            return F0;
        },
    };
    this.d = 268435440;
    this.a = 268435440;
    this.g = 268435440;
}
new F0();
for (let v9 = 0; v9 < 25; v9++) {
    let v11 = undefined;
    const o16 = {
        [undefined](a13, a14, a15) {
        },
    };
    v11 = o16;
    o16.undefined();
    for (let v18 = 0; v18 < 10; v18++) {
    }
}
gc();
