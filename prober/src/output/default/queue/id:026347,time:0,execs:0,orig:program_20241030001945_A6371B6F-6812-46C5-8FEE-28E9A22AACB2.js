const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                let v9 = 128;
                for ((() => {
                        const v10 = \`
                            1.7976931348623157e+308 - 1.7976931348623157e+308;
                        \`;
                    })();
                    v9++;
                    ) {
                }
            `;
            const v14 = v8.split(a6);
            v14.shift();
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
