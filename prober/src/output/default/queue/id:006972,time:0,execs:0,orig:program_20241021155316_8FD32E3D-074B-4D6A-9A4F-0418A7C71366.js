const v1 = [2147483649,47511,226356722,4294967297,-1462638489,30341,255,256,5,1974722803];
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor = transferArrayBuffer;
}
class C4 extends F2 {
}
const v5 = new C4();
try { v5.constructor(v1); } catch (e) {}
gc();
