const v0 = /xyz{1,32}(?:ab){4,7}?/dv;
const o1 = {
    "f": v0,
};
for (const v2 in o1) {
    class C3 {
        constructor(a5) {
            const v7 = `
                const o9 = {
                    valueOf() {
                        return this;
                    },
                };
                /\u{12345}/myvis;
            `;
            const v11 = v7.split(a5);
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C3(v2);
}
gc();
