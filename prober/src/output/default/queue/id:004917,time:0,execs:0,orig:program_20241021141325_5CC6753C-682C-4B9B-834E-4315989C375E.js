function f1() {
    return -4.0;
}
const v2 = `
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
    }
    let v6;
    try { v6 = F4(); } catch (e) {}
    SharedArrayBuffer.prototype = SharedArrayBuffer;
    const v8 = SharedArrayBuffer.constructor;
    try { v6.bind(f1); } catch (e) {}
    v8();
    let v11 = -50716;
    v11--;
    v11 << -4.0;
    const v14 = ++v11;
    const v15 = v14 + v14;
    v15 !== v15;
    const v17 = Math.tan(v11);
    v17 !== v17;
    v17 >> v17;
    v11[1];
    try { Symbol(); } catch (e) {}
    const v25 = new BigInt64Array(8);
    v25[6];
    const v27 = [1000000000000.0,2.0,Infinity,-2.735616879087119e+307,-1.106293781625981e+308,46457.351334702806,-2.220446049250313e-16,4.0];
    function f28(a29) {
    }
    v27.constructor = f28;
`;
eval(v2);
gc();
