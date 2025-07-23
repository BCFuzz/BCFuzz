function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 extends Set {
        #a = Set;
        constructor(a8, a9) {
            super();
            try {
                a9.#a;
            } catch(e11) {
            }
        }
    }
    const v12 = new C6();
    new C6(-1000000.0, v12);
}
new F0();
new F0();
gc();
