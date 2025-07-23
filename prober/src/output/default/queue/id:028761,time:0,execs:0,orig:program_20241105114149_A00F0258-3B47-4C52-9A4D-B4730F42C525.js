for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                class C19 {
                    for(a21, a22) {
                    }
                }
            `;
            const v23 = v18.split(a16);
            v23.reverse(v18, Int8Array, v18);
            try { v23.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
