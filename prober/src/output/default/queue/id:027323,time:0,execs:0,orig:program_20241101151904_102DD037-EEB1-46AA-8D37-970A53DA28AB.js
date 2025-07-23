function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -8;
}
const v3 = new F0();
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                class C10 {
                    static #d = this;
                }
                /\u{12345}/myvis;
            `;
            const v12 = v9.split(a7);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
