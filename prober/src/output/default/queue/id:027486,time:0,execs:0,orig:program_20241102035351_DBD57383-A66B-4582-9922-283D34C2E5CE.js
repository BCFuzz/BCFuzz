class C1 {
    constructor(a3) {
        const v5 = `
            with ("0") {
            }
            /\u{12345}/myvis;
        `;
        const v7 = v5.split(a3);
        try { v7.flatMap(eval); } catch (e) {}
    }
}
new C1("0");
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
gc();
