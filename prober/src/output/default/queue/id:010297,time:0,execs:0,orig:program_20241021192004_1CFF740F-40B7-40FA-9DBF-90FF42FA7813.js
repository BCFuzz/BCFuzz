class C2 {
    static #g = C2;
    constructor(a4, a5, a6) {
        const v7 = super.c;
        try {
            a6.#g = v7;
        } catch(e8) {
            for (let v9 = 0; v9 < 250; v9++) {
                v9++;
                v9--;
            }
        }
    }
}
const v12 = new C2();
new C2(v12, -1242922704, "g");
gc();
