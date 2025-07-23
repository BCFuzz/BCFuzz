for (let v0 = 0; v0 < 100; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = new Int32Array();
        const v9 = v8.sort();
        for (let i13 = 0, i14 = 10; i14--, (i13 & i13) - v9, i13 < i14; i13++) {
            i13 /= 8;
        }
    }
    new F1(F1, F1, v0, F1);
}
gc();
