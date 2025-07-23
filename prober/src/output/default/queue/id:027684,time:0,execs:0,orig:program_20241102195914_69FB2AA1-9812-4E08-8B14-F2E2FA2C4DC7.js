const v1 = new BigUint64Array();
const v3 = `
    class C4 {
    }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F5();
    function f8(a9, a10) {
        function f11() {
            if (!(v7 == Symbol())) {
            }
            return f8;
        }
        a9[Symbol.toPrimitive] = f11;
        delete C4[a9];
        return v7;
    }
    v7[Symbol.toPrimitive] = f8;
`;
for (let i19 = 0, i20 = 10; i19 !== i20; i20--) {
}
const v28 = eval(v3);
try { v28(v1); } catch (e) {}
gc();
