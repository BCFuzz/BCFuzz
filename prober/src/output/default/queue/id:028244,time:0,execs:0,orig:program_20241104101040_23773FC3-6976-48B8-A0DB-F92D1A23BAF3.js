for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o14 = {
    n(a11, a12, a13) {
        return this;
    },
};
for (const v15 in o14) {
    class C16 {
        constructor(a18) {
            const v20 = `
                class C21 {
                    static get constructor() {
                    }
                }
                /\u{12345}/myvis;
            `;
            const v24 = v20.split(a18);
            try { v24.flatMap(eval); } catch (e) {}
        }
    }
    new C16(v15);
}
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
gc();
