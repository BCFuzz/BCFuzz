const v1 = new String();
const v3 = `
    class C4 {
    }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F5();
    function f8(a9, a10) {
        function f11() {
            return -Symbol();
        }
        a9[Symbol.toPrimitive] = f11;
        return delete C4[a9];
    }
    v7[Symbol.source] = f8;
`;
const v18 = eval(v3);
try { v18(String); } catch (e) {}
try { v18(v1); } catch (e) {}
gc();
