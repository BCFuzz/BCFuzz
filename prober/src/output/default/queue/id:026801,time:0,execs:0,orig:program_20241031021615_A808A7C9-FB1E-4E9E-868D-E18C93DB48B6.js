const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                /\u{12345}/myvis;
                const o16 = {
                    toString(a12, a13) {
                        super.f *= 2017498698;
                        try {
                            super.valueOf();
                        } catch(e15) {
                        }
                        return a12;
                    },
                };
            `;
            const v17 = v9.split(a7);
            v17.reverse(eval);
            try { v17.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
