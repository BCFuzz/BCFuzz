class C0 {
}
const v1 = new C0();
for (let i5 = 70, i6 = 10 + 10; i6--, i6;) {
}
const v14 = new Int8Array(255);
for (const v15 in v14) {
    class C16 {
        constructor(a18) {
            const v20 = `
                v1[8] = /\u{12345}/myvis;
            `;
            const v22 = v20.split(a18);
            v22.shift();
            try { v22.flatMap(eval); } catch (e) {}
        }
    }
    new C16(v15);
}
gc();
