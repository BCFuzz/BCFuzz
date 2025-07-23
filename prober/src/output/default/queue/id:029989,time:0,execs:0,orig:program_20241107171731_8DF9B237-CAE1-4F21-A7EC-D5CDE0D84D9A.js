for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                let v19 = -12n;
                v19-- + "-14248";
            `;
            const v23 = v18.split(a16);
            for (let i26 = 0, i27 = 127; i26 < i27; i27--) {
            }
            v23.reverse(v12, v13);
            try { v23.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
