class C0 {
    constructor(a2, a3, a4, a5) {
        const v7 = `
            for (let v8 = 0; v8 < 5; v8++) {
            }
        `;
        const v9 = v7.replaceAll(0, a4);
        class C10 {
        }
        try { C10.constructor(v9); } catch (e) {}
    }
}
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
let v22 = eval;
let v23 = 8;
let v24 = "source";
[v22,v23,v24] = v24;
const v25 = `
    do {
        let v27 = 4;
        v27--;
    } while (0 < 65536)
`;
const v31 = v25.split(v23);
const v32 = [2.0,-4.0];
function f33(a34, a35, a36) {
    return a34;
}
new C0(v32, f33, f33(v31));
gc();
