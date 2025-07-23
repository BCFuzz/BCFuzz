for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
let v10 = Int8Array;
const v12 = new v10(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                for (let i20 = 0, i21 = 0; i20 < i21; v10--) {
                }
            `;
            const v28 = v18.split(a16);
            try { v28.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
