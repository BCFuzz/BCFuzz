function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        return f2;
    }
    function f3(a4) {
        a4[F0] *= a4;
        return a4;
    }
    Object.defineProperty(this, "b", { enumerable: true, get: f2, set: f3 });
    this.b = F0;
    this.b = -2147483649;
}
new F0();
new F0();
new F0();
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
for (let i21 = 0, i22 = 10;
    (() => {
        const v23 = i21 < i22;
        for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
        }
        return v23;
    })();
    i22--) {
}
gc();
