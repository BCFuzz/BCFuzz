function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
const v3 = f0();
let v4 = f0();
const v8 = new WeakSet();
const v9 = [];
let v11 = `
    for (let v12 = 0; v12 < 5; v12++) {
        const v15 = ("p" + v12).codePointAt;
        let v16;
        try { v16 = v15.getFloat64(v15, v11, v12); } catch (e) {}
        v3["growable"] /= -2.0;
        v4 /= v2;
        try { v15.call(v9, -4.0, v16); } catch (e) {}
    }
    let v19 = 128;
    for (const v21 in v9) {
        Object.defineProperty(v8, "d", { writable: true, get: f0 });
    }
    [462505212n];
    const o23 = {
    };
    o23.b = v8;
    const o24 = {
    };
    o24.b = v8;
    o24.g = 892.1582233802576;
    const o25 = {
    };
    o25.b = v8;
    o25.g = 892.1582233802576;
    o25.e = v19;
    const o26 = {
    };
    o26.b = v8;
    o26.g = 892.1582233802576;
    o26.e = v3;
    function f27(a28, a29) {
        return f27;
    }
    f27();
    v19--;
    const v32 = \`
        /\u{12345}/myvis;
    \`;
    class C34 {
        static set b(a36) {
        }
    }
    const v37 = new C34();
    delete o24[10];
    [22036];
    [516114516,7,10,2147483647];
    [536870889,-61548,2147483649,-2147483649,536870887,10,870018644];
    let v44 = -5.0;
    const v45 = v44--;
    61350 % v44;
    Math.max(v44);
    v45 && --v11;
    ++v11;
    C34.b = v37;
    function f51() {
        return v32;
    }
    let v53 = 9;
    v53 /= 257;
`;
eval(v11);
gc();
