class C0 {
    constructor(a2, a3) {
        class C4 {
            #toString(a6) {
            }
            constructor(a8) {
                try {
                    a8.#toString();
                } catch(e10) {
                }
            }
        }
        const v11 = new C4();
        const t13 = v11.constructor;
        new t13(v11);
        for (let v14 = 0; v14 < 100; v14++) {
        }
    }
}
new C0();
new C0();
gc();
