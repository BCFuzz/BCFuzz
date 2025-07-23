const v0 = /[a{0}]/dygisu;
class C1 {
    constructor(a3) {
        const v5 = `
            function f6() {
                return /\u{12345}/myvis;
            }
        `;
        const v8 = v5.split(a3);
        try { v8.flatMap(eval); } catch (e) {}
    }
}
new C1(v0);
gc();
