function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 14;
    this.b = 14;
    const v3 = this.constructor;
    try { new v3(); } catch (e) {}
    async function* f5(a6, a7, a8) {
        'use strict';
        return a6;
    }
}
const v9 = new F0();
const v10 = new F0(F0);
const v11 = new F0();
const v12 = [v9,v10,v9,v11,v11,F0];
const v13 = [F0,v12];
async function f15(a16, a17, a18, a19) {
    await a18;
    return 2423;
}
const v22 = [v13,v13,F0,v13];
const v23 = 2423 * v11;
v13[-1] = v12;
v11.c;
const v26 = Symbol.iterator;
const o35 = {
    [v26]() {
        let v28 = 10;
        const o34 = {
            next() {
                v28--;
                const v32 = v28 == 0;
                const o33 = {
                    "done": v32,
                    "value": v28,
                };
                return o33;
            },
        };
        return o34;
    },
};
function f36(a37, a38) {
    const o72 = {
        toString(a40, a41) {
            new Set([-1.1196905033754436e+308,8.016593422763634]);
            new Float64Array(2492);
            a41[this];
            const v50 = new WeakMap();
            v50.has(v50);
            const v54 = new Int32Array(257);
            new Int16Array(v54);
            return a37;
        },
        "h": v10,
        p(a58, a59) {
            [v11,v11,v11,v11,v11];
            function F62() {
                if (!new.target) { throw 'must be called with new'; }
                for (let v64 = 0; v64 < 10; v64++) {
                    f15(o35, v23, F62, this);
                }
                try { a38(this, a58, this, f36, this); } catch (e) {}
                v11.c;
            }
            const v68 = new F62();
            v68?.constructor;
            Error.construct(a38, [a37,Error,a37], a37);
            return v22;
        },
    };
    ~7;
    [-2,9007199254740990,-5,37763,-58441,-60213029,-268435456,-29165,14036];
    const v76 = [1073741824,-26526];
    const o77 = {
    };
    o77.h = o77;
    o77.c = o77;
    Proxy.name = Proxy;
    new Proxy(v76, o77);
    return o72;
}
f36(f36, f36(v11, v10, v22));
try { Reflect.ownKeys(0); } catch (e) {}
gc();
