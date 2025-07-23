const v0 = /[a{0}]/dygisu;
class C1 {
    constructor(a3) {
        const v5 = `
            function f6() {
                return v0;
            }
        `;
        const v7 = v5.split(a3);
        try { v7.flatMap(eval); } catch (e) {}
    }
}
new C1(v0);
gc();
