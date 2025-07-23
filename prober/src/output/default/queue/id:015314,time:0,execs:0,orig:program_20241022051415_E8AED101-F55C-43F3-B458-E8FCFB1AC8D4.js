const v0 = /if[\cA]/md;
const v1 = /\P{Any}xyz{1,}?/mdyi;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8) {
        Math.asinh(v1);
        return a4;
    }
    a4[Symbol.toPrimitive] = f6;
}
new F2(v1);
new F2(v0);
const v15 = [-7,1073741823,15663,-128,-4096,-2,0,-4096,-1338506200];
try { v15.slice(v0); } catch (e) {}
gc();
