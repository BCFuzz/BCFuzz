function f0(a1, a2, a3) {
    return a1;
}
for (let v4 = 0; v4 < 50; v4++) {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new f0();
    const v8 = new F5();
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        a12.h = a12;
        a12.h = a11;
        a12.h = a12;
    }
    const v13 = new F9(v8, v7);
    new F9(v8, v13);
}
gc();
