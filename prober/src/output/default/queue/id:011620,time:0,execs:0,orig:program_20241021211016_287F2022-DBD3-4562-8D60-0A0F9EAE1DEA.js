function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
class C4 {
    constructor(a6, a7) {
        super[v2];
        v3.__proto__ = this;
        for (let v9 = 0; v9 < 250; v9++) {
            v9++;
            v9--;
        }
    }
}
const v12 = new C4(v2, C4);
const v13 = new C4(v3, v12);
new C4(v12, v13);
gc();
