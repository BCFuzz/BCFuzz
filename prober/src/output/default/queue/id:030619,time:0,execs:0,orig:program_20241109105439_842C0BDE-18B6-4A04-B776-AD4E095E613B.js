const v0 = [4,-2147483648,-1,1462630411,-1511429659];
const v2 = /[(?:a+)?]/su;
const v3 = `
    Object.defineProperty(v0, 11, { enumerable: true, value: 3827 });
`;
const v5 = v3.split(v2);
class C6 {
    constructor(a8) {
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
        }
        for (let i21 = 0, i22 = 10; i21 != i22; i22--) {
        }
        for (let i31 = 0, i32 = 10; i31 != i32; i32--) {
        }
        const v40 = `
            \`match${C6}getUint32${v5}o\`;
        `;
        v40.split(a8).reverse().flatMap(eval);
    }
}
try { new C6(C6); } catch (e) {}
gc();
