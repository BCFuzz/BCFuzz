const o1 = {
    "g": Float32Array,
};
for (const v2 in o1) {
    class C3 {
        constructor(a5) {
            const v7 = `
                const o10 = {
                    set g(a9) {
                    },
                };
            `;
            const v11 = v7.split(a5);
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C3(v2);
}
gc();
