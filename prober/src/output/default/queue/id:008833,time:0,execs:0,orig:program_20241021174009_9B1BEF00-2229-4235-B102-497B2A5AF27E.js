function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        try { new a5(F2); } catch (e) {}
        class C9 extends Set {
            #a = Set;
            constructor(a11, a12) {
                super();
                try {
                    a12.#a;
                } catch(e14) {
                }
            }
        }
        const v15 = new C9();
        new C9(-1000000.0, v15);
    }
    const v17 = new F2(F0, F2);
    new F2(v17, F2);
}
const v19 = new F0();
const t22 = v19.constructor;
new t22();
new F0();
new F0();
gc();
