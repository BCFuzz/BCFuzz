const v1 = `
    function f2(a3, a4) {
        try {
        } catch(e5) {
            /oabc\x60(s\P{Decimal_Number})/vis;
        }
        return a4;
    }
    /\u{12345}/myvis;
`;
const v8 = v1.split();
try { v8.flatMap(eval); } catch (e) {}
gc();
