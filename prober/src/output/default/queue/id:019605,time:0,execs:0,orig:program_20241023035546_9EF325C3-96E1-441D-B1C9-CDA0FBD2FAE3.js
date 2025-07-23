for (let v0 = 0; v0 < 50; v0++) {
    function f1() {
        return f1;
    }
    const v2 = [v0,v0,v0,v0,v0];
    class C3 extends f1 {
    }
    function f4(a5, a6) {
        function F7(a9, a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            a11.arguments;
        }
        const v14 = new F7(f4, a6, F7);
        return v14;
    }
    f4();
    const v16 = f4();
    const v17 = v16.constructor;
    try { new v17(v2, v16, C3); } catch (e) {}
}
gc();
