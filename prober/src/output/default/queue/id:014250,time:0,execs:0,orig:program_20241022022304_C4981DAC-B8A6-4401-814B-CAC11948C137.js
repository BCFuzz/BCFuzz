function f0(a1, a2) {
    Number.isInteger(-Infinity);
    return a1;
}
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v11 = 0; v11 < 10; v11++) {
        function f12() {
            return v11;
        }
        f12[Symbol.species] = f0;
        const v16 = [-6.11084164070691,-1000000000000.0,-6.797835243387633,-3.0,1.0,1.6369247494600133e+308];
        v16.constructor = f12;
        try { v16.flatMap(Map); } catch (e) {}
    }
}
new F6();
gc();
