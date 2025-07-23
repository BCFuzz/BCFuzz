class C0 {
    static {
        const v3 = `
            /\u{12345}/myvis;
            let v5 = 1073741823;
            let v6 = 0.5191985838694158;
            v6--;
            ++v5;
        `;
        v3.split(8);
    }
}
for (let v10 = 0; v10 < 25; v10++) {
    function F11(a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i18 = 0, i19 = 10;
            (() => {
                function f20() {
                    return f20;
                }
                class C21 extends f20 {
                    constructor(a23, a24, a25) {
                        super();
                        class C26 {
                        }
                        const v27 = new C26();
                        ([4096]).concat(v27);
                    }
                }
                new C21();
                return i18 !== i19;
            })();
            i19--) {
        }
    }
    new F11();
}
gc();
