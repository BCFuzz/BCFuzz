for (let v0 = 0; v0 < 10; v0++) {
    function f1(a2, a3) {
        const o5 = {
            [a2]() {
            },
        };
    }
    class C6 {
    }
    const v7 = new C6();
    f1(v7);
    for (let v9 = 0; v9 < 25; v9++) {
        f1();
    }
}
gc();
