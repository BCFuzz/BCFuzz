const v1 = Symbol.species;
const o2 = {
    "a": v1,
};
for (const v3 in o2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const o11 = {
                    set g(a10) {
                    },
                };
            `;
            const v12 = v8.split(a6);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
