const v0 = /()o()(?=.)(?<a>(?<b>(?<c>(?<d>.).).).)+/dygisu;
class C1 {
    constructor(a3) {
        const v4 = `
            function f5() {
                /\u{12345}/myvis;
                return v0;
            }
        `;
        v4.split(a3);
    }
}
new C1(v0);
gc();
