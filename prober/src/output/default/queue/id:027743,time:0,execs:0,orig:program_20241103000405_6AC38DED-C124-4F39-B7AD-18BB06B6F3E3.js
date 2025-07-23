const o4 = {
    n(a1, a2, a3) {
        return a1;
    },
};
for (const v5 in o4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                class C11 {
                    static get constructor() {
                    }
                }
            `;
            const v13 = v10.split(a8);
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
}
gc();
