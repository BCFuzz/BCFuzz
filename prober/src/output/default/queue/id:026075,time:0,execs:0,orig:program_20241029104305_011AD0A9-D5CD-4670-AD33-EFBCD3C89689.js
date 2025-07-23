class C0 {
}
const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                switch (a7) {
                    case C0:
                        for (let v10 = 0; v10 < 5; v10++) {
                        }
                        break;
                }
            `;
            const v11 = v9.split(a7);
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
