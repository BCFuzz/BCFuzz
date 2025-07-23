class C1 extends Map {
}
const v2 = `
    class C3 {
    }
    class C4 extends C3 {
        constructor(a6, a7) {
            switch (C1) {
                default:
                    break;
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v2);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
