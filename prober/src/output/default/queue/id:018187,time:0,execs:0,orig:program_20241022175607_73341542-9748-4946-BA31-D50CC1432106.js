function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
        const v17 = [i9,i9,i9];
        const v19 = new SharedArrayBuffer(i9, v17);
        const v21 = new DataView(v19);
        try { v21.setInt16(v17, 9, v21); } catch (e) {}
        for (let v23 = 0; v23 < 25; v23++) {
        }
    }
}
new F1(9, F1, 9, F1);
gc();
