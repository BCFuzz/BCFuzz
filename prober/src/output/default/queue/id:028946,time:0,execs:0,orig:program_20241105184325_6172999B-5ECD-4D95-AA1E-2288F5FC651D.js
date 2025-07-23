function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
class C4 {
    constructor(a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
            function F9() {
                if (!new.target) { throw 'must be called with new'; }
                const v11 = new Uint32Array(this, v8, a7);
                const o13 = {
                    "maxByteLength": 16,
                };
                v3.__proto__ = v11;
                v11.__proto__ = this;
            }
            new F9();
        }
        for (let i17 = -3, i18 = 10; i17 < i18; i18--) {
        }
    }
}
const v25 = new C4(C4, F1);
new C4();
new C4(Uint32Array, v25);
class C28 {
}
gc();
