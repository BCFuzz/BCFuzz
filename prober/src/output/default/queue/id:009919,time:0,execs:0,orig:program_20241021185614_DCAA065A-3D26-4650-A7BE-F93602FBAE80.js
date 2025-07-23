function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 10; v4++) {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            const v8 = new Int8Array();
            for (let v9 = 0; v9 < 5; v9++) {
                v9 in v8;
            }
        }
        new F5();
    }
}
new F0();
gc();
