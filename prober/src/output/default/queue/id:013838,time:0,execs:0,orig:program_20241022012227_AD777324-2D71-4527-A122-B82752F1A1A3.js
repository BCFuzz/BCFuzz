function f0(a1, a2) {
    const o3 = {
    };
    class C5 extends o3.constructor {
    }
    const v6 = C5.seal();
    for (let v7 = 0; v7 < 100; v7++) {
        const v8 = /kt/yvs;
        for (let v9 = 0; v9 < 5; v9++) {
        }
        const v10 = v8.__proto__;
        function f11(a12) {
            return a12;
        }
        Object.defineProperty(v10, "e", { configurable: true, enumerable: true, set: f11 });
        v8.test(v6);
    }
    return a1;
}
f0.apply(f0);
gc();
