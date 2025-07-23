const v4 = `
    class C6 {
        static #a;
        static #e = "-13";
        constructor(a8, a9) {
            let v11 = gc();
            [...v11] = "-13";
            try { C6(a8, "-13", 1485, C6, this); } catch (e) {}
        }
        [-1] = 7;
        static [7];
        static #c;
        [512];
        1211175688 = "-13";
    }
`;
eval(v4);
gc();
