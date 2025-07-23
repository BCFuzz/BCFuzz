function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
    const v10 = new SharedArrayBuffer(56);
    const v12 = new BigInt64Array(v10);
    function f13(a14) {
        return v6 === 268435441;
    }
    v12[Symbol.toPrimitive] = f13;
    for (let v18 = 0; v18 < 5; v18++) {
        createGlobalObject().Atomics.waitAsync(v12, v18, v12, v18);
    }
}
new F3();
class C24 extends F0 {
}
new C24();
gc();
