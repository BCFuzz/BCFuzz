function f0() {
    function f1(a2, a3) {
        return a2;
    }
    const v5 = new Promise(f1);
    class C6 {
    }
    class C7 extends C6 {
    }
    const v8 = C7.bind();
    try { v8(v8, f0, C6); } catch (e) {}
    for (let v10 = 0; v10 < 5; v10++) {
        v10++;
        for (let v12 = 0; v12 < 10; v12++) {
        }
        const v13 = v10--;
        v5[536870887] = f0 !== v13 ? v13 : v13;
    }
    return Promise;
}
for (let v16 = 0; v16 < 50; v16++) {
    f0();
}
gc();
