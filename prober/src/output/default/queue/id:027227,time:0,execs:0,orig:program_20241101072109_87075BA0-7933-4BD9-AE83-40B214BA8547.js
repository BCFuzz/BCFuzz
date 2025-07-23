const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                switch (a7) {
                    case -2080884642n:
                        let v10;
                        try { v10 = C5(a7); } catch (e) {}
                        const o11 = {
                        };
                        o11.a = v10;
                        break;
                }
            `;
            const v12 = v9.split(a7);
            v12.reverse();
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
