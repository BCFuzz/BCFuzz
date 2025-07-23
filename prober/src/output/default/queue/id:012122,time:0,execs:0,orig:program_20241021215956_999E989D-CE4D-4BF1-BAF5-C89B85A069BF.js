function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
class C3 extends C2 {
    constructor(a5, a6) {
        super();
        for (let i = 0; i < 5; i++) {
            const o18 = {
                toString(a8, a9) {
                    function F10(a12, a13, a14) {
                        if (!new.target) { throw 'must be called with new'; }
                        for (let i = 0; i < 5; i++) {
                            a13[25] &= 102;
                            for (let v16 = 0; v16 < 250; v16++) {
                            }
                        }
                    }
                    new F10(F10, a8);
                    return F10;
                },
            };
            o18.toString(o18);
        }
    }
}
new C3(C2, F0);
new C3(C3, C2);
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
