function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = F0;
}
const v2 = new F0();
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /a\fb\nc\rd\te\vf+/dgu;
                /\u{12345}/myvis;
            `;
            const v11 = v8.split(a6);
            v11.reverse(v3, C4, C4);
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
for (let i17 = 0, i18 = 10; i17 != i18; i18--) {
    for (let i26 = i18, i27 = 10; i26 < i27; i27--) {
    }
}
gc();
