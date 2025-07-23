function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a3;
}
const v4 = new F0(F0, F0);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                const o11 = {
                };
                o11.g = C6;
            `;
            const v12 = v10.split(a8);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
