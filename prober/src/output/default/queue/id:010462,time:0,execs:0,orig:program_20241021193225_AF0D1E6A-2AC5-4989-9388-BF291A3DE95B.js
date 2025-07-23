const v0 = `
    class C1 {
        static {
            let v3;
            try { v3 = this(C1, this, C1, this, this); } catch (e) {}
            function F4(a6, a7, a8) {
                if (!new.target) { throw 'must be called with new'; }
            }
            try { v3.call(F4, v3, F4); } catch (e) {}
            Array();
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
