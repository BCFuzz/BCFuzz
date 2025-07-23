class C1 {
}
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                switch (a8) {
                    case C1:
                        break;
                    case 10:
                        break;
                }
            `;
            const v11 = v10.split(a8);
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
