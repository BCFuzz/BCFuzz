class C0 {
}
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const v14 = new Int8Array(255);
for (const v15 in v14) {
    class C16 {
        constructor(a18) {
            const v20 = `
                for (let i23 = 0, i24 = 10;
                    i23 < i24;
                    (() => {
                        C0[v20] = 6;
                    })()) {
                    for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
                    }
                }
            `;
            const v40 = v20.split(a18);
            try { v40.flatMap(eval); } catch (e) {}
        }
    }
    new C16(v15);
}
gc();
