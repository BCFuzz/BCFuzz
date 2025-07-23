class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
}
const v5 = f2();
const v8 = new Int8Array(255);
for (const v9 in v8) {
    class C10 {
        constructor(a12) {
            const v14 = `
                switch (a12) {
                    default:
                        v1.n(v5);
                        break;
                }
            `;
            const v16 = v14.split(a12);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C10(v9);
}
gc();
