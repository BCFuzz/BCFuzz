class C0 {
    constructor(a2, a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            this[this + v4] = v4;
        }
    }
}
const v6 = new C0();
JSON.parse(JSON.stringify([v6]));
gc();
