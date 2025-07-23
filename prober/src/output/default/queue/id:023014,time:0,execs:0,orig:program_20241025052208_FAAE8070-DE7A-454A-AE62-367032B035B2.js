const v0 = [NaN,1.0,6.464174675630032e+307,-8.725792781349959e+306,4.0,-804017.0937986537,-2.2250738585072014e-308,0.9612880918706345,-218227.31468183338];
function f1() {
    const v4 = new Int16Array(1880);
    for (const v5 in v4) {
    }
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        const v18 = createGlobalObject().Atomics;
        try { v18.xor(Int16Array, v0, v0); } catch (e) {}
    }
    return v4;
}
f1();
f1();
gc();
