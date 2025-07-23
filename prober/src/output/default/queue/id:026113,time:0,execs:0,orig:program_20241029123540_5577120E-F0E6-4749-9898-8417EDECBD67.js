const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    let v10 = 128;
                    for ((() => {
                            const v11 = \`
                                /\u{12345}/myvis;
                                1.7976931348623157e+308 - 1.7976931348623157e+308;
                            \`;
                        })();
                        ++v10;
                        ) {
                    }
                    return f9;
                }
            `;
            const v16 = v8.split(a6);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
