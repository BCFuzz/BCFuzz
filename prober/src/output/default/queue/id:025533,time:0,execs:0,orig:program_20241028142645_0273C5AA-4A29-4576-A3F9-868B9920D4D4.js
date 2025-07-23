for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                for (let [i26, i27] = (() => {
                        let v21 = 0;
                        while (v21 < 10) {
                            const o24 = {
                            };
                            v21++;
                        }
                        return [0, 10];
                    })();
                    i26 < i27;
                    ) {
                    a16 *= eval;
                }
            `;
            const v33 = v18.split(a16);
            try { v33.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
