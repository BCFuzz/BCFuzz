const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                const o10 = {
                    1073741825: 2147483648,
                };
                /\u{12345}/myvis;
            `;
            const v12 = v9.split(a7);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
