for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v22 = new Int8Array(255);
for (const v23 in v22) {
    class C24 {
        constructor(a26) {
            const v28 = `
                /\u{12345}/myvis;
                class C30 {
                    constructor() {
                        for (let i33 = 0; v28; C24++) {
                        }
                    }
                }
            `;
            const v37 = v28.split(a26);
            try { v37.flatMap(eval); } catch (e) {}
        }
    }
    new C24(v23);
}
gc();
