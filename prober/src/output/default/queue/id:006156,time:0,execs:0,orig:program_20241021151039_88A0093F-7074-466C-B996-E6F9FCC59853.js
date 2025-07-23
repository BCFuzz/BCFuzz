function f0(a1) {
    let v2;
    try { v2 = a1.valueOf(); } catch (e) {}
    let v3;
    try { v3 = a1.a(); } catch (e) {}
    try { v3(v2, f0); } catch (e) {}
    for (let v5 = 0; v5 < 2500; v5++) {
    }
    return f0;
}
f0.call();
gc();
