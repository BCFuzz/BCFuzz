class C0 {
    constructor(a2, a3) {
        class C4 {
            #toString(a6) {
                const t4 = this.constructor;
                new t4();
            }
            constructor(a10) {
                try {
                    a10.#toString();
                } catch(e12) {
                }
            }
        }
        const v13 = new C4();
        const v14 = v13.propertyIsEnumerable;
        try { v14(); } catch (e) {}
        const t17 = v13.constructor;
        new t17(v13);
        for (let v18 = 0; v18 < 100; v18++) {
        }
    }
}
new C0();
new C0();
gc();
