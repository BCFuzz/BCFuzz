class C1 {
    constructor(a3) {
        const v5 = `
            function F6(a8, a9, a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        const v12 = v5.split(a3);
        try { v12.flatMap(eval); } catch (e) {}
    }
}
new C1("m");
gc();
