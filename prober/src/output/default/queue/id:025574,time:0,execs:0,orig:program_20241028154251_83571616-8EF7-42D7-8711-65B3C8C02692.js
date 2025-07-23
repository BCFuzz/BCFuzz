for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
class C11 {
    constructor(a13) {
        const v15 = `
            function f16() {
                /\u{12345}/myvis;
                return v15;
            }
        `;
        const v18 = v15.split(a13);
        try { v18.flatMap(eval); } catch (e) {}
    }
}
new C11("c");
gc();
