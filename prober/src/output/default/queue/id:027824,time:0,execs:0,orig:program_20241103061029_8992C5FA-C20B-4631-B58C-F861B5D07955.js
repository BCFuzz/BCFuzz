const o1 = {
    "g": undefined,
};
for (let i4 = 0, i5 = 10; i5-- < i5;) {
}
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
const v22 = /n(a)\1/mdyvgis;
function f23() {
    const v24 = [v22,v22,v22,v22];
    for (let v25 in o1) {
        class C26 {
            constructor(a28) {
                let v30 = `
                    ({"length":v25,...v30} = v24);
                    /\u{12345}/myvis;
                `;
                v30.split(a28).flatMap(eval);
            }
        }
        new C26(v25);
    }
    return v24;
}
v22.toString = f23;
try { v22.toString(); } catch (e) {}
for (let i38 = 0, i39 = 10; i38 != i39; i39--) {
}
gc();
