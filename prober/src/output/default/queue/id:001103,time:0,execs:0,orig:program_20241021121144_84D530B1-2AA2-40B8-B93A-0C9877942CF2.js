function f3(a4, a5) {
    const o20 = {
        ...a4,
        __proto__: a4,
        "b": 462505212n,
        "h": a4,
        [2n]: a5,
        [a5]: f3,
        ...a4,
        "c": 462505212n,
        128: a4,
        "e": -6n,
        "d": a5,
        ...a4,
        set f(a7) {
            function f8() {
                const v12 = ~a4;
                let v13 = 14 >> v12;
                Math.cbrt(v12);
                +(++v13);
                return this;
            }
        },
    };
    return o20;
}
const v22 = new Set();
const v24 = v22.union(v22).entries();
class C25 {
    2359 = v24;
}
const v26 = new C25();
const v27 = new C25();
async function f28(a29, a30, a31) {
    const o32 = {
    };
    const v34 = new Proxy(v26, o32);
    await v34;
    return v27;
}
f28();
const v38 = f3(462505212n, 462505212n);
const v39 = f3(-6n, 462505212n);
f3(v38, -6n);
[-536870912,9007199254740992,-998318048,2030608448,-39097,36794,1,16,9007199254740990];
[536870889,5,-2147483648,4294967295,-9007199254740992,62053,9007199254740992,5,37311,536870912];
[536870912,-4294967295,-6,6,-65537,-46055];
1000n % 1000n;
const v50 = [268435456,-924754394,13,-54297,536870887,1073741824,8,1073741825,11,10000];
const v52 = -19738 >= v50;
const v54 = new Int8Array();
v54.copyWithin(v52, 467);
for (let v56 = 0; v56 < 100; v56++) {
    f3(-6n, v38);
}
Object.defineProperty(v50, 6, { configurable: true, enumerable: true, get: f3 });
v39.toString = f3;
gc();
