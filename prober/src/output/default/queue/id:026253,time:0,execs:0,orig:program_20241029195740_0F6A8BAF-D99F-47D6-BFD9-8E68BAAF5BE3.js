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
                        [0,8,-1073741824,-13];
                        break;
                }
            `;
            const v12 = v10.split(a8);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
