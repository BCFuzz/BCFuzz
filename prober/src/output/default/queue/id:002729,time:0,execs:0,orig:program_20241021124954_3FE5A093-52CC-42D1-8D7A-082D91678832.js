function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C3 extends F0 {
    constructor(a5) {
        super();
        const v6 = [a5,v2];
        for (let v7 = 0; v7 < 25; v7++) {
            v6["p" + v7] = v7;
        }
    }
}
new C3();
new C3();
new C3();
class C13 extends C3 {
}
new C13();
gc();
