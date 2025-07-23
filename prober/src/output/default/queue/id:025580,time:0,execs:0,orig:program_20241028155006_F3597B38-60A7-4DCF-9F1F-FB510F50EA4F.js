const v2 = `
    class C3 extends -48102n {
    }
    /\u{12345}/myvis;
`;
const v5 = v2.split();
try { v5.flatMap(eval); } catch (e) {}
gc();
