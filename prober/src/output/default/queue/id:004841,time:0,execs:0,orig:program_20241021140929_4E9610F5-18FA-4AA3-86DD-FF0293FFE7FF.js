function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 32; v5++) {
        function f6() {
            return f6;
        }
        const v8 = [-6.11084164070691,-1000000000000.0,-6.797835243387633,-3.0,1.0,1.6369247494600133e+308];
        v8.constructor = f6;
        try { v8.flatMap(Map); } catch (e) {}
    }
}
const v10 = new F0();
new F0(v10, v10, v10);
gc();
