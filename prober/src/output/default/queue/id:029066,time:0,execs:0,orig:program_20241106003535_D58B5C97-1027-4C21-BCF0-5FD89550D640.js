const v0 = /[a{0}]/dygisu;
class C1 {
    constructor(a3) {
        const v5 = `
            function f6() {
                /\u{12345}/myvis;
                return v0;
            }
        `;
        v5.split(a3).flatMap(parseInt);
    }
}
new C1(v0);
gc();
