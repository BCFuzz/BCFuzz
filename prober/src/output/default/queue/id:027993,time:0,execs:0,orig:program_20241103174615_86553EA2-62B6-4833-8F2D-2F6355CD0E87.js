const v1 = `
    /\u{12345}/myvis;
    function f4() {
        return "throw";
    }
    const v6 = [["throw",f4]];
    class C7 {
    }
    const t8 = C7.constructor;
    t8(v6);
`;
const v10 = v1.split();
try { v10.flatMap(eval); } catch (e) {}
gc();
