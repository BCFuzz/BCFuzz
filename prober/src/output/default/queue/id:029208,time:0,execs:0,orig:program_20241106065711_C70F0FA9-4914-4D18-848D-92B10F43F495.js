const v0 = [-2410,1,10,14,-43922,2147483649];
const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                const o10 = {
                };
                new C5(o10, o10, ...v0);
            `;
            const v12 = v9.split(a7);
            v12.reverse();
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
