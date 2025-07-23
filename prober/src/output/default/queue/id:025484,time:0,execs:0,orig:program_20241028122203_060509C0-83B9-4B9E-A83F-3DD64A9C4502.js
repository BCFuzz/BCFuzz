const o1 = {
};
o1.e = Float32Array;
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        i5--;
        for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
        }
    })()) {
}
for (const v22 in o1) {
    class C23 {
        constructor(a25) {
            const v27 = `
                for (let v28 = 0; v28 < 5; v28++) {
                }
            `;
            const v29 = v27.split(a25);
            try { v29.flatMap(eval); } catch (e) {}
        }
    }
    new C23(v22);
}
gc();
