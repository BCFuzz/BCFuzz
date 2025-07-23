function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C8 extends Set {
            #a = Set;
            constructor(a10, a11) {
                super();
                try {
                    a11.#a;
                } catch(e13) {
                }
            }
        }
        const v14 = new C8();
        new C8(-1000000.0, v14);
    }
    const v16 = new F2(F0, F2);
    new F2(v16, F2);
}
new F0();
new F0();
new F0();
gc();
