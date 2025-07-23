class C0 {
    #toString(a2) {
    }
    constructor(a4) {
        try {
            a4.#toString();
        } catch(e6) {
        }
    }
}
const v7 = new C0();
const t11 = v7.constructor;
new t11(v7);
for (let v10 = 0; v10 < 250; v10++) {
}
gc();
