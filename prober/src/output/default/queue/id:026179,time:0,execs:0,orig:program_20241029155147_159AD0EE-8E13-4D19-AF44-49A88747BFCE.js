class C1 {
    constructor(a3) {
        const v5 = `
            function F6() {
                if (!new.target) { throw 'must be called with new'; }
            }
            /\u{12345}/myvis;
        `;
        const v9 = v5.split(a3);
        try { v9.flatMap(eval); } catch (e) {}
    }
}
new C1("e");
gc();
