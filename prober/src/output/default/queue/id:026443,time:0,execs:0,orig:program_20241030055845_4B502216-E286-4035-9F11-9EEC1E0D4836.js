function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -8;
}
const v3 = new F0();
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                function f10() {
                    const o12 = {
                        get d() {
                            return eval;
                        },
                    };
                    return /\u{12345}/myvis;
                }
            `;
            const v14 = v9.split(a7);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
