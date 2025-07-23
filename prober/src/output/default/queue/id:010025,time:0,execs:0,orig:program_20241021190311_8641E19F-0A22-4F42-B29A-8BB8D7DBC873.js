const v0 = `
    class C1 {
    }
    class C2 extends C1 {
        constructor(a4, a5) {
            for (let i8 = 0, i9 = 10;
                i8 < i9;
                (() => {
                    new Uint8Array(C1);
                })()) {
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
gc();
