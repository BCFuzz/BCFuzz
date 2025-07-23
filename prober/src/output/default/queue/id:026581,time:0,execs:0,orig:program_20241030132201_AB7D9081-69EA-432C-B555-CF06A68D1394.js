const o2 = {
    set h(a1) {
    },
};
for (const v3 in o2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const o12 = {
                    set g(a10) {
                        try { a6(a10); } catch (e) {}
                    },
                };
            `;
            const v13 = v8.split(a6);
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
