const v1 = new BigUint64Array();
const v2 = `
    class C3 {
    }
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = new F4();
    function f7(a8, a9) {
        function f10(a11, a12) {
            a12.g ||= a9;
            return v2;
        }
        a8.toString = f10;
        delete C3[a8];
        return v6;
    }
    v6[Symbol.toPrimitive] = f7;
`;
const v17 = eval(v2);
try { v17(v1); } catch (e) {}
gc();
