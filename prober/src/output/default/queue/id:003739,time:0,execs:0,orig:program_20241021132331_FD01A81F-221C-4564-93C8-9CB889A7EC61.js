function f0(a1, a2, a3, a4) {
    for (let v5 = 0; v5 < 250; v5++) {
        const v6 = v5++;
        WeakSet.toString(a2, v6, a2, v6, f0).strike();
        v5--;
        function F11(a13) {
            if (!new.target) { throw 'must be called with new'; }
        }
    }
    return a1;
}
f0();
gc();
