const v0 = `
    function f1() {
        return f1;
    }
    const v4 = new Int16Array(208, 208, 208);
    v4["reduce"](f1, 208);
    class C7 {
    }
    const v8 = new C7();
    class C9 {
    }
    for (const v12 of v8.toString().link()) {
        v12 in C9;
    }
    let v14 = 0;
    do {
        v14++;
    } while (v14 < 45830)
    for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
    }
    for (let i30 = 0, i31 = 10; i30 !== i31; i31--) {
    }
    for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
    }
`;
eval(v0);
gc();
