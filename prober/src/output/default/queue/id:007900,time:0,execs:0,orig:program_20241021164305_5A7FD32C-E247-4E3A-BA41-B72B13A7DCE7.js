const v0 = /\p{Script_Extensions=Greek}[]((\xed\xa0\x80))\x02?/mdys;
const v1 = `
    class C3 extends Date {
    }
    try { C3.parse(C3); } catch (e) {}
    const v5 = new C3();
    try { v5.getFullYear(); } catch (e) {}
    const v7 = v0.toString;
    try { v7.call(C3); } catch (e) {}
    const v9 = [1,4294967295];
    try { v9.findIndex(v5); } catch (e) {}
    try { v9.filter(v7); } catch (e) {}
    function F12(a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i = 0; i < 5; i++) {
        let v17;
        try { v17 = ("toISOString").lastIndexOf(v7); } catch (e) {}
        v17++;
        function f19(a20) {
            return f19;
        }
        v5["toISOString"]();
    }
`;
eval(v1);
gc();
