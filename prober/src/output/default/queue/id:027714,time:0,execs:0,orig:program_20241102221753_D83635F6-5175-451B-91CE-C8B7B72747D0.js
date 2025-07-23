const o1 = {
    get g() {
        return this;
    },
};
for (const v2 in o1) {
    class C3 {
        constructor(a5) {
            const v7 = `
                const o10 = {
                    set g(a9) {
                    },
                };
                /\u{12345}/myvis;
            `;
            const v12 = v7.split(a5);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C3(v2);
}
gc();
