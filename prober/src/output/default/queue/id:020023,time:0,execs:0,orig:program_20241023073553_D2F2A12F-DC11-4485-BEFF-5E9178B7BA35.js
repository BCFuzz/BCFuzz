class C1 {
    constructor(a3) {
        function F4(a6) {
            if (!new.target) { throw 'must be called with new'; }
            for (let v7 = 0; v7 < 5; v7++) {
                ("p")[a6];
            }
        }
        new F4(F4);
        new F4(a3);
    }
}
for (let v11 = 0; v11 < 50; v11++) {
    new C1(v11);
}
for (let i15 = 4, i16 = 10; i15 < i16; i16--) {
}
gc();
