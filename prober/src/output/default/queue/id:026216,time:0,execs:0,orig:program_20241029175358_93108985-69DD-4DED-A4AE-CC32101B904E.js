class C1 {
    constructor(a3) {
        const v5 = `
            function f6(a7, a8) {
                try {
                } catch(e9) {
                }
                return a8;
            }
        `;
        const v10 = v5.split(a3);
        try { v10.flatMap(eval); } catch (e) {}
    }
}
new C1("e");
gc();
