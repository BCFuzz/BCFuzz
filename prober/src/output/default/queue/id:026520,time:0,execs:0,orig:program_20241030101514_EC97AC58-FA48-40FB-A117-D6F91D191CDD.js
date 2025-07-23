class C0 {
}
const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                function f10() {
                    /\u{12345}/myvis;
                    switch (v3) {
                        default:
                            C0[f10];
                            break;
                    }
                }
            `;
            const v13 = v9.split(a7);
            v13.shift();
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
