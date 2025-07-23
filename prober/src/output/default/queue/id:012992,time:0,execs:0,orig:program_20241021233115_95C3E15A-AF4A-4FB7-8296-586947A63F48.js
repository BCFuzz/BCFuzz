function f0() {
    function f1(a2, a3) {
        return f1;
    }
    const v5 = new Promise(f1);
    class C6 {
    }
    class C7 extends C6 {
    }
    for (let v8 = 0; v8 < 5; v8++) {
        v8++;
        for (let i12 = (() => {
                for (let v10 = 0; v10 < 5; v10++) {
                }
                return 0;
            })();
            i12 < 2;
            i12++) {
        }
        const v18 = v8--;
        v5[536870887] = f0 !== v18 ? v18 : v18;
    }
    return f0;
}
for (let v21 = 0; v21 < 50; v21++) {
    f0();
}
gc();
