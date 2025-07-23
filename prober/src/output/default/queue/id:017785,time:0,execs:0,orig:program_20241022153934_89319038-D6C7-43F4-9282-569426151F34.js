function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 extends F0 {
}
const v7 = new Int32Array(681);
function f8(a9, a10, a11, a12) {
    const v14 = [-470.0768177646895,NaN,1000.0,0.9187269583914538,-195.28406776615714,2.2250738585072014e-308,-2.2250738585072014e-308,-2.4088217561956853,1000000.0];
    v14[13] = C4;
    function f15() {
        return eval();
    }
    const v18 = [-52806,22515,9,8,9];
    return Reflect.apply(f15, v14[13], v18);
}
v7.map(f8);
gc();
