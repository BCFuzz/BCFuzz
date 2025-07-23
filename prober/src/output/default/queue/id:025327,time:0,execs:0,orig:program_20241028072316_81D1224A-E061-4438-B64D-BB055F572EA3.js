for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                let v19 = 0;
                class C20 {
                    constructor() {
                        for (let [i25, i26] = (() => {
                                10 === 10;
                                return [0, 10];
                            })();
                            i25 < i26;
                            ) {
                        }
                    }
                }
                v19++;
            `;
            const v33 = v18.split(a16);
            try { v33.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
