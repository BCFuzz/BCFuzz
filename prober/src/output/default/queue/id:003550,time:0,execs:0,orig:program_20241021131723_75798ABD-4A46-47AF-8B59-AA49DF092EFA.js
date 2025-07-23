const v1 = [462930.50484926975,462930.50484926975,462930.50484926975];
const v2 = [10790,15,-1411783585,-145111426,-5,256];
const v3 = [-572867068,-935637352];
function f4(a5) {
    Object.defineProperty(a5, 5, { configurable: true, enumerable: true, value: v1 });
    return v3;
}
f4(v3);
const v7 = f4(v2);
function f8(a9, a10, a11, a12) {
    a11.unshift(v7);
    const o14 = {
        __proto__: a11,
    };
    o14[Symbol.isConcatSpreadable] = 462930.50484926975;
    o14.concat();
    return v2;
}
f8(v7, v7, v3);
f8(v2, f4, v3);
gc();
