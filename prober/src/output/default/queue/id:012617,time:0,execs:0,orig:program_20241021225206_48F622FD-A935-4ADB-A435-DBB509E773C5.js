function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 10; v4++) {
        const v5 = [804168982];
        const v7 = ("slice").trimLeft;
        try { new v7(); } catch (e) {}
        const v9 = v5["slice"]();
        v9.slice(v4, a2).splice(v9, "slice");
        for (let v12 = 0; v12 < 250; v12++) {
        }
    }
}
new F0();
gc();
