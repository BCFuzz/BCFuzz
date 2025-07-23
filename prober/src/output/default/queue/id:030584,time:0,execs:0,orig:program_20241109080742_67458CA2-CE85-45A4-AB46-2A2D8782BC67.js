const v2 = `
    class C3 {
        static constructor = 1496601810;
    }
`;
const v4 = v2.split();
try { v4.flatMap(eval); } catch (e) {}
gc();
