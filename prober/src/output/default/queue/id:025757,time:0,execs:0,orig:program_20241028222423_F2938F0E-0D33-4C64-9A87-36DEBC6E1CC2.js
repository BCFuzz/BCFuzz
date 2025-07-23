for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let i23 = 0, i24 = 10; i23 !== i24; i24--) {
}
const v32 = new Int8Array(255);
for (const v33 in v32) {
    class C34 {
        constructor(a36) {
            const v38 = `
                class C39 {
                    static set c(a41) {
                        const o43 = {
                            2: -6.617663914510164,
                        };
                    }
                }
                /\u{12345}/myvis;
            `;
            const v45 = v38.split(a36);
            try { v45.flatMap(eval); } catch (e) {}
        }
    }
    new C34(v33);
}
gc();
