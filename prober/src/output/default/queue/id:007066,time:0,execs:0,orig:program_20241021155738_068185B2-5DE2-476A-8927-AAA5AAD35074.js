function f0() {
    const v1 = [f0];
    const v2 = v1.map;
    let v3;
    try { v3 = v2(f0, v1, f0); } catch (e) {}
    const v5 = new Set(v1);
    let v6;
    try { v6 = v5.difference(f0, v5, v3); } catch (e) {}
    v6--;
    try { new Symbol(); } catch (e) {}
    class C10 extends Set {
    }
    for (let v11 = 0; v11 < 1000; v11++) {
    }
    const v12 = new C10();
    const v13 = v12.symmetricDifference;
    let v14;
    try { v14 = v13(); } catch (e) {}
    try { new v13(v13, v13, v14); } catch (e) {}
    return v14;
}
class C16 extends f0 {
}
const v17 = new C16();
const t24 = v17.constructor;
new t24();
new C16();
gc();
