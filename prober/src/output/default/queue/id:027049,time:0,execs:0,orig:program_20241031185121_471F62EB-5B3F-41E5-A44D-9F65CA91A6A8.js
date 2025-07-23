for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i13 = 0, i14 = 10; i13 !== i14; i14--) {
}
const v22 = new Int8Array(255);
for (const v23 in v22) {
    class C24 {
        constructor(a26) {
            const v28 = `
                try {
                } finally {
                    v23 | v23;
                }
                /\u{12345}/myvis;
            `;
            const v31 = v28.split(a26);
            try { v31.flatMap(eval); } catch (e) {}
        }
    }
    new C24(v23);
}
gc();
