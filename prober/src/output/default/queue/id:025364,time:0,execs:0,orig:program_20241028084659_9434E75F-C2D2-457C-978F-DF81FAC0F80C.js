const v0 = /a\bc/yvgis;
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                const o14 = {
                    [-9007199254740992]: v0,
                    toString(a12, a13) {
                        return 255;
                    },
                };
            `;
            const v15 = v10.split(a8);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
