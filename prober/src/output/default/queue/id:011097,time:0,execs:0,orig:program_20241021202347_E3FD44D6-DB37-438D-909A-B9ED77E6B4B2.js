class C1 {
}
class C2 extends C1 {
}
Object.defineProperty(C1, 2, { value: NaN });
const v3 = [-7.414030966927311e+307,1000.0,4.0,-1.7976931348623157e+308,0.49482746553425516,0.05152555387344038];
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v7 = 0; v7 < 92; v7++) {
        try { v3.every(a6); } catch (e) {}
        for (let v9 = 0; v9 < 25; v9++) {
        }
    }
}
new F4(NaN);
gc();
