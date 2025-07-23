function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
class C5 extends F0 {
    #c = v2;
    [v3];
    constructor(a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = v3;
            this.d = this;
            this.g = a14;
        }
        new F9(v3, a7, this);
        new F9(v2, this, v4, this);
    }
}
Float32Array.from(C5.toLocaleString()).sort();
gc();
