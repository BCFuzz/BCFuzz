[-2.2250738585072014e-308,-2.2250738585072014e-308,1000000.0,1.7976931348623157e+308,-1000000.0];
function f2(a3, a4, a5, a6) {
    for (let v7 = 0; v7 < 100; v7++) {
        const v9 = new WeakSet(a5);
        const v10 = v9.add(v9);
        try { v10.has(a4); } catch (e) {}
        v10.has(a3);
    }
}
f2();
f2();
gc();
