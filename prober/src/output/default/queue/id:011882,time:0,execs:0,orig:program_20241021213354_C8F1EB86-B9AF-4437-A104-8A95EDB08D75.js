function f0(a1) {
    function f3() {
        return f0;
    }
    function f4(a5) {
        return f3;
    }
    Object.defineProperty(WeakRef, "valueOf", { configurable: true, get: f3, set: f4 });
    return ([-1.8858791461583273,9.41481700846682,3.680736438781666e+306,-585.5547084115362,0.7128048379506289,NaN,0.1194515126909852,-2.220446049250313e-16]).splice(WeakRef);
}
const v9 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
function f10() {
    return f0;
}
Object.defineProperty(v9, "constructor", { configurable: true, get: f10 });
const v11 = v9.constructor;
try { v11(); } catch (e) {}
gc();
