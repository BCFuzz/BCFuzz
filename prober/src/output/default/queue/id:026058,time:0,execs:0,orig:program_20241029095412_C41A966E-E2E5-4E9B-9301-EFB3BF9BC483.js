class C1 {
    c = Int16Array;
}
const v2 = new C1();
for (const v4 in v2) {
    class C5 {
        constructor(a7) {
            const v9 = `
                do {
                } while ((() => {
                        for (const v11 of "-1024") {
                        }
                        return 0 < -1494372921;
                    })())
            `;
            const v14 = v9.split(a7);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
