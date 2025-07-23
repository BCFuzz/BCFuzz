const v1 = new String();
const v3 = `
    class C4 {
    }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F5();
    for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
    }
    function f18(a19, a20) {
        function f21() {
            const v22 = Symbol();
            if (!(v7 <= v22)) {
            }
            return v22;
        }
        a19[Symbol.toPrimitive] = f21;
        delete C4[a19];
        return Symbol;
    }
    v7[Symbol.source] = f18;
`;
const v28 = eval(v3);
try { v28(v1); } catch (e) {}
gc();
