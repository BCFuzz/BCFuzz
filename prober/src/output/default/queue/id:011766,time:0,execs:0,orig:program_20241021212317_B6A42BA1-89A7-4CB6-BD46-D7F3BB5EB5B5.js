function f0() {
    function f1(a2, a3) {
        return f1;
    }
    const v5 = new Promise(f1);
    class C6 {
    }
    class C7 extends C6 {
    }
    for (let v8 = 0; v8 < 10; v8++) {
        v8++;
        const v10 = v8--;
        v5[536870887] = f0 !== v10 ? f0 : v10;
    }
    return C6;
}
for (let v13 = 0; v13 < 100; v13++) {
    f0();
}
gc();
