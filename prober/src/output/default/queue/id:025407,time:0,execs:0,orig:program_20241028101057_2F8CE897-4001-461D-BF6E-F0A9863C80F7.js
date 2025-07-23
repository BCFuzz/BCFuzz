class C1 {
    constructor(a3) {
        const v5 = `
            function f6() {
                for (const v9 in Uint32Array()) {
                    return arguments;
                }
                return C1;
            }
        `;
        const v11 = v5.split(a3);
        try { v11.flatMap(eval); } catch (e) {}
    }
}
new C1("m");
gc();
