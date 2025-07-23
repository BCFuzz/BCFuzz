class C1 extends Map {
}
const v2 = new C1();
const v3 = `
    class C4 {
    }
    class C5 extends C4 {
        constructor(a7, a8) {
            let v10 = this["isFinite"]();
            [C5,...v10] = v2;
        }
    }
    /\u{12345}/myvis;
`;
eval(v3);
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();
