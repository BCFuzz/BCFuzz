const v0 = [1.7976931348623157e+308,0.9311499508695967,0.6240326364053471,-313.56543181748543,-1.7976931348623157e+308,-1000000.0,-71.89182886980188];
class C1 {
    constructor(a3, a4, a5, a6) {
        try {
            eval(([a5,v0]).toLocaleString());
        } catch(e11) {
        }
    }
}
for (let i14 = 0, i15 = 10; i14 < i15; --i15) {
}
function F23() {
    if (!new.target) { throw 'must be called with new'; }
}
let v25 = new F23();
let v26 = eval;
let v27 = 8;
let v28 = "source";
[v26,v27,v28] = v28;
const v29 = `
    do {
        v25 = forceGCSlowPaths;
    } while (0 < 65536)
`;
const v33 = v29.split(v27);
const v34 = [2.0,-4.0];
function f35(a36, a37, a38) {
    return a36;
}
new C1(v34, f35, f35(v33));
gc();
