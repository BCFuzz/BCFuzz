function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C3 {
    constructor(a5, a6) {
        function F7() {
            if (!new.target) { throw 'must be called with new'; }
            const v10 = new Uint32Array();
            v2.__proto__ = v10;
        }
        new F7();
        for (let i14 = -3, i15 = 10;
            (() => {
                v2.c = a5;
                return i14 < i15;
            })();
            i15--) {
        }
    }
}
new C3(C3, C3);
const v23 = new C3();
new C3(v23, v23);
gc();
