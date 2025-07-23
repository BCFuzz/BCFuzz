class C3 {
    #m(a5, a6) {
        return this;
    }
    static #b;
    static #d = -4294967297;
    static 140;
    #a = -4294967297;
    f;
}
const v10 = new C3();
const v11 = new C3();
const v12 = new C3();
class C13 extends C3 {
    constructor(a15, a16, a17, a18) {
        super();
        const v20 = Symbol.iterator;
        const o29 = {
            [v20]() {
                let v22 = 10;
                const o28 = {
                    next() {
                        v22--;
                        const v26 = v22 == 0;
                        const o27 = {
                            "done": v26,
                            "value": v22,
                        };
                        return o27;
                    },
                };
                return o28;
            },
        };
    }
}
const v30 = new C13(v10, v12, v11, v11);
const v33 = new Int16Array();
v33.slice(-603274525, -603274525);
Date.toString = Date;
[false,10000n,Date];
new C13(v10, C3, v10, v30);
function F40() {
    if (!new.target) { throw 'must be called with new'; }
}
const v42 = new F40();
[-1e-15,-1e-15,-1e-15,-1e-15,v42];
new C13(C3, v11, C13, v12);
const o46 = {
};
function F47(a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
}
new F47(o46, F47);
const v54 = new Uint32Array(1000);
for (const v55 in v54) {
    function f57(a58, a59, a60, a61) {
        function f63(a64, a65) {
            a61 >= o46;
            return arguments;
        }
        f63(arguments, a61);
        return arguments;
    }
    f57();
}
gc();
