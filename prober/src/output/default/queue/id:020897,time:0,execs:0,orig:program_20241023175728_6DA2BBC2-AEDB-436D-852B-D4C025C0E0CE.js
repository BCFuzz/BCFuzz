function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C7 extends Set {
            constructor(a9, a10) {
                super();
                function F11(a13) {
                    if (!new.target) { throw 'must be called with new'; }
                    for (let v15 = 0; v15 < 10; v15++) {
                        const v16 = new Set("copyWithin");
                        v16.union(v16);
                    }
                }
                class C18 extends F11 {
                }
                new C18();
            }
        }
        new C7();
        new C7();
    }
    new F2();
    new F2(F0);
}
const v24 = new F0();
const t26 = v24.constructor;
new t26();
new F0();
gc();
