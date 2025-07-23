const v0 = `
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C5 {
    }
    class C6 extends C5 {
        constructor(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                Boolean(a12);
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
