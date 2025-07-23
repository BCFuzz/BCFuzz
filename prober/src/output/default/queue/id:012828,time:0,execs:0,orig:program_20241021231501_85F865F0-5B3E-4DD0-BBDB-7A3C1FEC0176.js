function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
    const v3 = `
        const v5 = new Map();
        const v6 = v5.has;
        try { v6(); } catch (e) {}
        const v8 = v5 | v2;
        typeof undefined;
        const v11 = v8 / v8;
        /\u{12345}/myvis;
        d = v11;
        for (let v13 = 0; v13 < 5; v13++) {
            for (let i16 = 0, i17 = 10;
                (() => {
                    i17--;
                    class C19 {
                        #toString(a21) {
                        }
                        constructor(a23) {
                            v13.#toString();
                        }
                    }
                    return i16 < i17;
                })();
                ) {
            }
        }
    `;
    eval(v3);
}
new F0();
gc();
