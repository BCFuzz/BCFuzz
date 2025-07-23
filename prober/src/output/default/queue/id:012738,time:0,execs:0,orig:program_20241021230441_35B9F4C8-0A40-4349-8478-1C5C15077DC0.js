for (let v0 = 0; v0 < 100; v0++) {
    function f1(a2, a3) {
        let v4 = 0;
        for (let i = 0; i < 5; i++) {
            v4++;
        }
        for (let [i10, i11] = (() => {
                eval(v4);
                return [0, 10];
            })();
            i10 < i11;
            i11--) {
        }
        return f1;
    }
    f1(f1, v0);
}
gc();
