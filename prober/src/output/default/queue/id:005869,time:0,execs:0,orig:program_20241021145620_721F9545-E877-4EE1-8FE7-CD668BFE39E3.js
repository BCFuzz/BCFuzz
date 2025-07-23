for (let i = 0; i < 5; i++) {
    let v1 = 4096n;
    const v2 = [44774n,44774n,44774n];
    class C3 {
        constructor(a5, a6, a7, a8) {
            a6 * a6;
            v1 %= a7;
        }
    }
    const v10 = new C3(v2, v1, 44774n);
    const v11 = v10.constructor;
    try { new v11(v2, 44774n, v10); } catch (e) {}
}
gc();
