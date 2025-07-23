class C0 {
    constructor(a2, a3, a4, a5) {
        const v7 = `
            for (let v8 = 0; v8 < 5; v8++) {
            }
        `;
        const v9 = v7.replaceAll(0, a4);
        class C10 {
            constructor(a12) {
                const v14 = `
                    \`match${C10}getUint32${v9}o\`;
                `;
                v14.split(a12).reverse().flatMap(eval);
            }
        }
        try { new C10(C10); } catch (e) {}
    }
}
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
let v30 = eval;
let v31 = 8;
let v32 = "source";
[v30,v31,v32] = v32;
const v33 = `
    do {
        let v35 = 4;
        v35--;
    } while ((() => {
            const o41 = {
                toString(a38, a39) {
                    return /\u{12345}/myvis;
                },
            };
            return 0 < 65536;
        })())
`;
const v44 = v33.split(v31);
const v45 = [2.0,-4.0];
function f46(a47, a48, a49) {
    return a47;
}
new C0(v45, f46, f46(v44));
gc();
