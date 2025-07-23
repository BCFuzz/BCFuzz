function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                function f11() {
                    new F0(...255);
                    return 255;
                }
            `;
            const v13 = v10.split(a8);
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
