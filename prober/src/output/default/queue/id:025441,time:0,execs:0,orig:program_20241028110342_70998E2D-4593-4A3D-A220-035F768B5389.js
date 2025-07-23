for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
                    for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
                    }
                }
            `;
            const v39 = v18.split(a16);
            try { v39.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
