function f0() {
    return f0;
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
}
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const v13 = new F1();
for (const v14 in v13) {
    class C15 {
        constructor(a17) {
            const v19 = `
                for (let v20 = 0; v20 < 5; v20++) {
                    /\u{12345}/myvis;
                }
            `;
            const v22 = v19.split(a17);
            try { v22.flatMap(eval); } catch (e) {}
        }
    }
    new C15(v14);
}
gc();
