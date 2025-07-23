function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C3 {
    constructor(a5, a6) {
        for (let v7 = 0; v7 < 5; v7++) {
            function F8() {
                if (!new.target) { throw 'must be called with new'; }
                const v11 = new Uint32Array(this, v7, a6);
                const o14 = {
                    "maxByteLength": 16,
                };
                new SharedArrayBuffer(1, o14);
                v2.__proto__ = v11;
                v11.__proto__ = this;
            }
            new F8();
        }
        for (let i20 = -3, i21 = 10; i20 < i21; i21--) {
        }
    }
}
const v28 = new C3(v2, C3);
new C3(F0, v28);
new C3();
gc();
