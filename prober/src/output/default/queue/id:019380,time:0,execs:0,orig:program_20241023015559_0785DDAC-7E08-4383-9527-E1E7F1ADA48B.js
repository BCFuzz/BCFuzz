function f0() {
    return f0;
}
const v1 = [f0];
class C2 extends f0 {
}
function f3(a4, a5) {
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        a10.arguments;
        function f13() {
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                a16.prototype = a16;
                a17.length = a17;
            }
            const v20 = new F14(F14, f13);
            new F14(F14, F14);
            return v20;
        }
        f13();
    }
    const v23 = new F6(f3, a5, F6);
    return v23;
}
const v24 = f3(f0, f3);
const v25 = f3(v24, v24);
const v26 = v25.constructor;
try { new v26(v1, v25, C2); } catch (e) {}
gc();
