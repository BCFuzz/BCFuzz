const v0 = [0.8488000991864659,2.2250738585072014e-308,-3.0,NaN,-634338.9106402759,-1000000.0];
async function* f1(a2, a3, a4) {
    yield* a2;
    return f1;
}
const v5 = f1(v0);
v5.next();
v5.return();
gc();
