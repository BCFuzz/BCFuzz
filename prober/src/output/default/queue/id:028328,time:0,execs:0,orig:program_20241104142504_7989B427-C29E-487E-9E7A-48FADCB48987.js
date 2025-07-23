class C1 {
    constructor(a3) {
        const v5 = `
            function f6() {
                const t4 = createGlobalObject().Float16Array;
                t4().__defineSetter__;
                return C1;
            }
        `;
        const v12 = v5.split(a3);
        try { v12.flatMap(eval); } catch (e) {}
    }
}
new C1("d");
gc();
