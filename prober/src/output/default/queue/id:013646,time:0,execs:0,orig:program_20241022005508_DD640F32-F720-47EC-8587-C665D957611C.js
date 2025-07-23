const v0 = [9007199254740991,-39505,-1671808935,268435441,256,1193551285];
for (let v1 = 0; v1 < 25; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        class C5 extends Array {
        }
        C5.from(v0);
    }
    new F2();
    const v8 = new F2();
    const t10 = v8.constructor;
    new t10();
}
gc();
