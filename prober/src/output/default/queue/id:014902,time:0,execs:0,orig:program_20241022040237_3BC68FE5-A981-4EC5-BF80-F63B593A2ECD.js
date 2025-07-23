class C1 {
    #g = 1000.0;
    constructor(a3) {
        try {
            const t4 = 1000.0;
            t4.#g = this;
        } catch(e4) {
            const v5 = e4.constructor;
            v5.stackTraceLimit = v5;
        }
    }
}
const v6 = new C1();
const t13 = v6.constructor;
new t13();
gc();
