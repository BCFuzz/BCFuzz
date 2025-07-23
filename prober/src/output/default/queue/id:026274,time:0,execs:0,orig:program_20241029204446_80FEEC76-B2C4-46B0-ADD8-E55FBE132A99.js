const v0 = [-9007199254740990,7];
const v1 = [268435441,7,1204372231,13,-507672490,-368644908,-4,1738004575];
let v3 = new Float32Array();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a7;
}
const v8 = new F4();
for (let v9 in v8) {
    class C10 {
        constructor(a12) {
            const v14 = `
                for (const v15 of v1) {
                    let v17 = -7177 && v15;
                    ({"c":v17,"f":v3,"length":v9,} = v0);
                }
            `;
            const v18 = v14.split(a12);
            try { v18.flatMap(eval); } catch (e) {}
        }
    }
    new C10(v9);
}
gc();
