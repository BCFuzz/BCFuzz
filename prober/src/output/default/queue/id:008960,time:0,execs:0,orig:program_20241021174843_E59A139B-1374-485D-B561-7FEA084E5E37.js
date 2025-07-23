function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
class C4 {
    constructor(a6) {
        for (let v7 = 0; v7 < 50; v7++) {
            const v8 = v3[128];
            const t9 = a6.toString().constructor;
            new t9(v8);
        }
    }
}
new C4(v2);
const v13 = new C4(C4);
new C4(v13);
for (let i17 = 0, i18 = 10; i17 !== i18; i18--) {
}
gc();
