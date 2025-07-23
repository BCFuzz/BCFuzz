const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    const v11 = ("n").fontcolor();
                    if (v11 < v11) {
                    } else {
                        for (let i15 = 0, i16 = 10;
                            i15 < i16;
                            (() => {
                                const v20 = \`
                                    class C21 {
                                    }
                                \`;
                            })()) {
                        }
                    }
                    return f9;
                }
            `;
            const v24 = v8.split(a6);
            try { v24.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
