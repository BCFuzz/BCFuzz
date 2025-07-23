const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                const v10 = /\u{12345}/myvis;
                const o16 = {
                    toString(a12, a13) {
                        for (let v14 = 0; v14 < 5; v14++) {
                            v14 - v14;
                            super[v10] = "number";
                        }
                        return v10;
                    },
                };
            `;
            const v17 = v9.split(a7);
            v17.reverse(v4, v3, v4, v17, "number");
            try { v17.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
