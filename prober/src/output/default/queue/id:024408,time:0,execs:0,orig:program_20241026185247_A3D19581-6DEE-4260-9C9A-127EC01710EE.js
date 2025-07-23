const v1 = new WeakMap();
v1.get(WeakMap);
[];
[];
[];
const v6 = `
    const v9 = Symbol.for(v6).description;
    class C10 {
    }
    function F11(a13, a14, a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C17 {
    }
    const o19 = {
        [v9]: undefined,
    };
    class C20 extends C17 {
    }
    class C21 {
    }
    const v22 = new C21();
    const t22 = v22.constructor;
    const v24 = new t22();
    v24.constructor;
`;
eval(v6);
gc();
