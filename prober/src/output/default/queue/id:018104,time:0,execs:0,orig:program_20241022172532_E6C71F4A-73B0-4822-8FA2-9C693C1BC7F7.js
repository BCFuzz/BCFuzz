function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = a2?.d;
    try { new v4(); } catch (e) {}
    for (let i = 0; i < 25; i++) {
        const v8 = ("valueOf").toLowerCase.apply;
        try { v8(v8, v8, F0); } catch (e) {}
        for (let v10 = 0; v10 < 10; v10++) {
            for (let v11 = 0; v11 < 5; v11++) {
            }
        }
    }
}
F0.d = F0;
new F0(F0);
gc();
