function f3(a4, a5, a6) {
    function F7(a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = new F7();
    class C11 extends F7 {
    }
    const v12 = new C11();
    const v13 = `
        const v14 = v10 <= v12;
        !(v14 ^ v14);
        Math.hypot(Math, C11, f3, F7);
    `;
    eval(v13);
    return f3;
}
f3("undefined", "name", "MAX_SAFE_INTEGER", "undefined");
gc();
