const v1 = `
    ([[13558,1024,1073741824,6,-13,-1024]]).flatMap();
`;
const v6 = v1.replaceAll();
for (let i9 = -3, i10 = 10; 8 < i10; i10--) {
}
const v18 = `
    class C19 {
        [undefined] = 8;
    }
`;
const v20 = v18.replaceAll(8, v6);
class C21 {
    constructor(a23) {
        const v25 = `
            \`match${C21}getUint32${v20}o\`;
        `;
        const v27 = v25.split(a23);
        v27.reverse();
        v27.flatMap(eval);
    }
}
try { new C21(C21); } catch (e) {}
gc();
