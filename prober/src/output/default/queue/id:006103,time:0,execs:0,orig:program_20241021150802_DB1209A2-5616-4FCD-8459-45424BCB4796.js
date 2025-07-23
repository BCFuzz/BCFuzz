let v0 = [4294967295,-1,268435456,-65535,-1,-2147483649,4294967296,-268435456];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
let v5 = new F1(F1, v0);
function f7(a8, a9) {
    arguments.callee += a9;
    let v11 = ++v0;
    [a9,v5,,v11] = arguments;
    return v11;
}
f7(-1e-15);
gc();
