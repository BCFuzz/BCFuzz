class C2 extends Set {
    #a = Set;
    constructor(a4, a5) {
        super();
        try {
            a5.#a;
        } catch(e7) {
        }
    }
}
const v8 = new C2();
new C2(-1000000.0, v8);
gc();
