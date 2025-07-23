const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                function f10() {
                    const o14 = {
                        set g(a12) {
                            try { a7(); } catch (e) {}
                            const t9 = -4021;
                            t9[0] = C5;
                        },
                    };
                    return f10;
                }
            `;
            const v15 = v9.split(a7);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
