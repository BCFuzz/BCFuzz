class C2 {
}
function f3() {
    function f4(a5, a6) {
        let v7;
        try { v7 = a5.subarray(1, a6, -1197866576, 1); } catch (e) {}
        for (let i = 0; i < 5; i++) {
            for (let v8 = 0; v8 < 250; v8++) {
                v8++;
            }
            const v11 = Symbol.toPrimitive;
            class C12 {
            }
            function f13(a14, a15) {
                return v7;
            }
            C2[v11] = 1;
        }
        return -1197866576;
    }
    return f4;
}
Object.defineProperty(C2, Symbol.toPrimitive, { configurable: true, enumerable: true, get: f3 });
const v18 = new C2();
const v19 = new C2();
function f20() {
    C2.__proto__ = v19;
}
v19[Symbol.toPrimitive] = f20;
function f22(a23, a24, a25) {
    a23[Symbol.toStringTag] = f20;
    const o27 = {
        [C2]: -1197866576,
        [a24]: a23,
    };
    return 1;
}
f22(v19, C2);
f22(Symbol, v19);
f22(v18);
gc();
