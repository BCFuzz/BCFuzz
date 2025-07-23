function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.__lookupGetter__;
    let v8;
    try { v8 = v7(); } catch (e) {}
    const v9 = a5.constructor;
    function f10(a11, a12) {
        return v7;
    }
    v9[Symbol.toPrimitive] = f10;
    function f15(a16, a17) {
        function F18(a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
        }
        return F18(F3, v8);
    }
}
const v24 = new F3(v2);
function f25() {
    return v24;
}
const v26 = f25.constructor;
try { v26(F0); } catch (e) {}
const v31 = [-6.11084164070691,-1000000000000.0,-6.797835243387633,-3.0,1.0,1.6369247494600133e+308];
v31.constructor = f25;
try { v31.flatMap(Map); } catch (e) {}
gc();
