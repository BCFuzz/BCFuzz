const v2 = new Float32Array();
class C3 {
}
const v4 = new C3();
class C5 {
}
const v6 = new C5();
const v7 = `
    v6.__proto__ = v4;
    const o8 = {
    };
    o8.e = v7;
    const o9 = {
    };
    o9.e = v7;
    o9.h = v2;
    const o10 = {
    };
    o10.e = v7;
    o10.h = v2;
    0n / 15n;
    for (let v16 = 0; v16 < 5; v16++) {
        const o17 = {
            ..."128",
            564: "128",
            53797290: "getOwnPropertyNames",
        };
    }
    o10.c = 257;
    class C21 {
        static #a;
        static #e = "getOwnPropertyNames";
        constructor(a23, a24) {
        }
        [-1] = 7;
        static [7];
        [512];
        1211175688 = "getOwnPropertyNames";
    }
    const o25 = {
    };
    const v28 = new BigInt64Array();
    try { v28.sort(941); } catch (e) {}
    function f30() {
        return C5;
    }
    o25.e = v7;
`;
eval(v7);
gc();
