const v0 = /za\s/myg;
for (let v1 = 0; v1 < 10; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v5 = 0; v5 < 5; v5++) {
            ("p" + v5).replace(v0, "");
        }
    }
    new F2();
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
gc();
