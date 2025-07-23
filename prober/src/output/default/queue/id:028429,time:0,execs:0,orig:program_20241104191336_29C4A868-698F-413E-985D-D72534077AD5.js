class C1 {
    constructor(a3) {
        const v5 = `
            function F6(a8, a9) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        const v10 = v5.split(a3);
        v10.shift(a3, C1, v5, v10);
        try { v10.flatMap(eval); } catch (e) {}
    }
}
new C1("d");
gc();
