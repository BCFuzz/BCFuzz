function f0() {
    function f1(a2, a3) {
        a2();
        return a2;
    }
    new Promise(f1);
    class C7 {
    }
    class C8 extends C7 {
    }
    for (let v9 = 0; v9 < 5; v9++) {
    }
    return f0;
}
for (let v10 = 0; v10 < 100; v10++) {
    f0();
}
gc();
