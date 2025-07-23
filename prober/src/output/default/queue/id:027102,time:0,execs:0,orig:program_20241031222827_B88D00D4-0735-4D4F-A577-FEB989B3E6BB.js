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
const v9 = new t11(v7);
const t13 = v9.constructor;
new t13(v7);
for (let v12 = 0; v12 < 250; v12++) {
}
gc();
