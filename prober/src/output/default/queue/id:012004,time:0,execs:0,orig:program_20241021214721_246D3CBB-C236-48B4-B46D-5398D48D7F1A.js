const v0 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v2 = `
    const v4 = new Map();
    const v5 = v4.has;
    try { v5(v5); } catch (e) {}
    const v7 = v4 | v0;
    typeof undefined;
    const v10 = v7 / v7;
    /\u{12345}/myvis;
    d = v10;
    new Uint8Array();
    for (let v13 = 0; v13 < 5; v13++) {
        for (let i16 = 0, i17 = 10;
            (() => {
                i17--;
                class C19 {
                    #toString(a21) {
                    }
                    constructor(a23) {
                        try {
                            v13.#toString();
                        } catch(e25) {
                        }
                    }
                }
                new C19(v13);
                return i16 < i17;
            })();
            ) {
        }
    }
`;
eval(v2);
gc();
