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
                const v16 = v14.split(a12);
                v16.reverse(v14, C0, a2, v14, v16).flatMap(eval);
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
    } while (0 < 65536)
`;
const v39 = v33.split(v31);
const v40 = [2.0,-4.0];
function f41(a42, a43, a44) {
    return a42;
}
new C0(v40, f41, f41(v39));
gc();
