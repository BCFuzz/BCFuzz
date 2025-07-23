for (let i2 = -1716696, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                const o26 = {
                    toString(a20, a21) {
                        do {
                            /\u{12345}/myvis;
                        } while (0 < 65537)
                        return eval;
                    },
                };
            `;
            const v27 = v18.split(a16);
            try { v27.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
