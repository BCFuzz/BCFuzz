function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
class C4 {
    constructor(a6) {
        const v7 = v3[v2];
        for (let v8 = 0; v8 < 25; v8++) {
            v3["0ph" + v8] = v8;
        }
        for (let i13 = v7, i14 = 10; -13369 < i14; i14--) {
        }
    }
}
new C4(C4);
new C4(C4);
gc();
