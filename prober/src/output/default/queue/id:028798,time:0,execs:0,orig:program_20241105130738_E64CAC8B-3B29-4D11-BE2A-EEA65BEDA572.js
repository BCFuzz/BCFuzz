const v1 = `
    const v2 = \`
        /\u{12345}/myvis;
    \`;
    class C4 {
        constructor(a6) {
            const v7 = \`
                class C8 {
                    constructor() {
                        switch (this) {
                        }
                    }
                    /*
                    constructor(a11) {
                        /\u{12345}/myvis;
                    }
                    */
                }
                this >= -1073741824n;
            \`;
            v7.split(a6);
        }
    }
    new C4(v2);
`;
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
}
eval(v1);
gc();
