const v0 = [-3,23420,43785,-1,-321402745,128];
const v2 = new Int32Array(v0, Int32Array, v0);
const v3 = v2[v0];
const v4 = /[(?:a+)?]/su;
const v5 = `
    let {"b":v6,"d":v7,} = v3;
`;
const v8 = v5.split(v4);
class C9 {
    constructor(a11) {
        const v13 = `
            \`match${C9}getUint32${v8}o\`;
        `;
        const v15 = v13.split(a11);
        v15.reverse(v15, this).flatMap(eval);
    }
}
try { new C9(C9); } catch (e) {}
gc();
