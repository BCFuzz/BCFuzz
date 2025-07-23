class C0 {
    constructor(a2, a3, a4, a5) {
        const v7 = `
            for (let [i19, i20] = (() => {
                    for (let i11 = 0, i12 = 10; i11 < i12;) {
                    }
                    return [0, 10];
                })();
                i19 < i20;
                ) {
            }
        `;
        const v26 = v7.replaceAll(0, a4);
        class C27 {
            constructor(a29) {
                const v31 = `
                    \`match${C27}getUint32${v26}o\`;
                `;
                v31.split(a29).reverse().flatMap(eval);
            }
        }
        try { new C27(C27); } catch (e) {}
    }
}
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
}
let v47 = eval;
let v48 = 8;
let v49 = "source";
[v47,v48,v49] = v49;
const v50 = `
    do {
        let v52 = 4;
        v52--;
    } while ((() => {
            const o58 = {
                toString(a55, a56) {
                    /\u{12345}/myvis;
                },
            };
            return 0 < 65536;
        })())
`;
const v61 = v50.split(v48);
const v62 = [2.0,-4.0];
function f63(a64, a65, a66) {
    return a64;
}
new C0(v62, f63, f63(v61));
gc();
