class C0 {
}
const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                switch (a7) {
                    case C0:
                        break;
                }
            `;
            const v10 = v9.split(a7);
            try { v10.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
