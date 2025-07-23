function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 10; v4++) {
        const v5 = [804168982];
        const v7 = ("slice").trimLeft;
        try { new v7(F0, v7); } catch (e) {}
        const v9 = v5["slice"]();
        v9.slice(v9);
        for (let v11 = 0; v11 < 250; v11++) {
        }
    }
}
new F0();
gc();
