for (let i4 = 0, i5 = 10 + 10; i5--, i4 < i5;) {
}
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
const v24 = new Int8Array(255);
for (const v25 in v24) {
    class C26 {
        constructor(a28) {
            const v30 = `
                class C31 {
                    static #c = 9n;
                }
            `;
            const v32 = v30.split(a28);
            v32.reverse(255, 255);
            try { v32.flatMap(eval); } catch (e) {}
        }
    }
    new C26(v25);
}
gc();
