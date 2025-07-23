function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { Int32Array(); } catch (e) {}
    function f8() {
    }
    class C9 extends f8 {
    }
    try { C9(); } catch (e) {}
    class C11 extends C9 {
    }
    const v12 = new C11();
    try { v12.call(); } catch (e) {}
    const v14 = new Int32Array();
    const v15 = v14.sort();
    try { v15.sort(v15); } catch (e) {}
    class C17 {
    }
    try { C17(); } catch (e) {}
    for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
        for (let v29 = 0; v29 < 10; v29++) {
        }
    }
}
new F0();
new F0();
gc();
