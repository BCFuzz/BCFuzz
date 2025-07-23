const v0 = [-11];
for (let v1 = 0; v1 < 5; v1++) {
    for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
        const v13 = [-1.0,1000000000000.0,-1e-15,1e-15,-1.7156749891270841e+308];
        v0["push"](undefined, [-2.2250738585072014e-308,-2.6559528901432037e+307,-2.2250738585072014e-308,-257.2519144784253,2.220446049250313e-16,1.7976931348623157e+308], ...v13);
    }
    function f17(a18, a19, a20, a21) {
        function f22(a23) {
            const o28 = {
                valueOf(a25) {
                    for (const v26 of v0) {
                        v26?.[v26];
                    }
                    return v0;
                },
            };
            return o28;
        }
        class C29 extends f22 {
        }
        const v30 = new C29();
        return v30.valueOf();
    }
    const v32 = f17();
    f17(v32, v32, v0, v0);
}
gc();
