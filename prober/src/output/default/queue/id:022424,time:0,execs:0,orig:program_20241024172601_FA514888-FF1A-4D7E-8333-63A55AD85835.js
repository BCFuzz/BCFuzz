const v2 = new Int16Array();
const v3 = `
    function f4() {
        return f4;
    }
    const v6 = new Int16Array(208);
    const v8 = v6["reduce"](f4);
    class C9 {
    }
    const v10 = new Int8Array();
    class C11 {
    }
    let v12 = v10.toString();
    let v13 = 0;
    do {
        --v12;
        v2[v12] = false;
        C9[255];
        v8[Symbol.match];
        v13++;
    } while (v13 < 45830)
    for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
    }
    for (let i35 = 0, i36 = 10; i35 !== i36; i36--) {
    }
`;
eval(v3);
gc();
