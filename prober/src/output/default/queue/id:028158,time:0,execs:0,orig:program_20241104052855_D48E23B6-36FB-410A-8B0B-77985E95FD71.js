const v0 = `
    const v1 = \`
        /\u{12345}/myvis;
    \`;
    class C4 {
        constructor(a6) {
            const v7 = \`
                class C8 {
                    constructor() {
                        switch (this) {
                            case 63560:
                                break;
                        }
                    }
                    /*
                    constructor(a11) {
                        /\u{12345}/myvis;
                    }
                    */
                }
            \`;
            v7.split(a6);
        }
    }
    new C4(v1);
`;
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
eval(v0);
gc();
