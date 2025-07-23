function f2(a3) {
    let v4;
    try { v4 = a3.toUpperCase(); } catch (e) {}
    v4[1129] = 8;
    return f2;
}
try { f2(); } catch (e) {}
gc();
