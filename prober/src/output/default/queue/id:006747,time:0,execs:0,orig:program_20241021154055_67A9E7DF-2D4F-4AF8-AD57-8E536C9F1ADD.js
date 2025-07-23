function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.toLocaleString(a6, a4, F2, this); } catch (e) {}
    for (let v9 = 0; v9 < 5; v9++) {
    }
    let v10;
    try { v10 = BigUint64Array(a4); } catch (e) {}
    const v11 = new BigUint64Array();
    try { v11.copyWithin(); } catch (e) {}
    const v13 = [a6,a6,a6,a6,a6];
    try { Int32Array.from(); } catch (e) {}
    try { Int32Array(v13); } catch (e) {}
    [0,9007199254740990,9007199254740991];
    function f18() {
    }
    try { f18.bind(); } catch (e) {}
    class C20 extends f18 {
    }
    try { C20.toString(); } catch (e) {}
    class C22 extends C20 {
    }
    const v23 = new C22(v10);
    const v24 = v23?.constructor;
    try { v24(); } catch (e) {}
    let v26;
    try { v26 = v23.call(); } catch (e) {}
    class C27 extends Uint32Array {
    }
    const v28 = C27.toString;
    try { v28(v26); } catch (e) {}
    for (let v30 = 0; v30 < 250; v30++) {
    }
}
new F2(Uint32Array, Uint32Array, BigUint64Array, F2);
gc();
