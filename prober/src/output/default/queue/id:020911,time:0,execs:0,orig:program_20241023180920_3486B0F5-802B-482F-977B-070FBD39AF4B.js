class C1 {
    constructor(a3, a4) {
        let v5 = arguments;
        v5 = 8;
    }
}
new C1();
function f7(a8, a9) {
    const v10 = a8.bind();
    try { v10(v10); } catch (e) {}
    return C1;
}
f7(f7);
for (let v13 = 0; v13 < 1000; v13++) {
}
gc();
