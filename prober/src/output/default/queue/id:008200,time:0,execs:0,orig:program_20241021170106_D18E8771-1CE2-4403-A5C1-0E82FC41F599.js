function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.__lookupGetter__;
    try { v6(); } catch (e) {}
    const v8 = a2?.constructor;
    let v9;
    try { v9 = new v8(a4, v6, F0); } catch (e) {}
    function f10() {
        return F0;
    }
    f10.call(v9, F0, F0);
    class C12 extends f10 {
    }
    const v13 = new C12();
    try { v13.bind(); } catch (e) {}
    for (let v15 = 0; v15 < 5; v15++) {
        for (let v16 = 0; v16 < 5; v16++) {
        }
        v15++;
        v15--;
    }
}
const v19 = new F0(F0, F0, F0, F0);
const v20 = new F0();
new F0(v19, v20, v20, v20);
new F0(v20);
gc();
