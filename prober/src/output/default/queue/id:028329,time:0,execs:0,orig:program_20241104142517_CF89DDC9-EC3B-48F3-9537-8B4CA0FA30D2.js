const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                let v9 = 128;
                const v10 = /\u{12345}/myvis;
                Float32Array(v10, a6);
                for ((() => {
                        const v13 = \`
                            function f14() {
                                return v10;
                            }
                        \`;
                    })();
                    v9++;
                    ) {
                }
            `;
            const v16 = v8.split(a6);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
