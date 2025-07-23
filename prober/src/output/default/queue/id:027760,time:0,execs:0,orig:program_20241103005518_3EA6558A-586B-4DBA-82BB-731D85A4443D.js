const v1 = [2145978620,9007199254740992,1746223937,6,-9007199254740990,-10,127,257,46544,4];
for (let v2 = 0; v2 < 25; v2++) {
    function f3() {
        return v2;
    }
    const v4 = [v1,v1,v1,v1];
    class C5 extends f3 {
    }
    function f6(a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            a11.name = a11;
            try { new a13(a7, a8, "7"); } catch (e) {}
            a13.arguments;
        }
        const v17 = new F9(f6, a8, F9);
        return v17;
    }
    f6(v1);
    f6();
    const v20 = f6();
    const v21 = v20.constructor;
    try { new v21(v4, v20, C5); } catch (e) {}
}
gc();
