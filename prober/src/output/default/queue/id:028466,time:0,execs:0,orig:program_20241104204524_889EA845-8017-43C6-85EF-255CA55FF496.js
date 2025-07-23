const v1 = new String(String);
const v3 = `
    class C4 {
    }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F5();
    function f8(a9, a10) {
        function f11() {
            -Symbol(a10);
            return a9;
        }
        a9[Symbol.toPrimitive] = f11;
        delete C4[a9];
        return v7;
    }
    v7[Symbol.source] = f8;
`;
const v18 = eval(v3);
try { v18(v1); } catch (e) {}
gc();
