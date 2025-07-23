const v1 = new BigUint64Array();
const v2 = `
    class C3 {
    }
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = new F4();
    function f7(a8, a9) {
        function f10(a11) {
            for (let i13 = v1, i14 = 10; i13 < i14;) {
            }
            return a11;
        }
        const v21 = Symbol.toPrimitive;
        Object.defineProperty(a8, v21, { writable: true, enumerable: true, value: f10 });
        delete C3[a8];
        return v21;
    }
    v6[Symbol.toPrimitive] = f7;
`;
const v26 = eval(v2);
try { v26(v1); } catch (e) {}
gc();
