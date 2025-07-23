const v0 = [211,-5,9007199254740991,1024,1076229654,1073741823];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const o5 = {
    };
    const v7 = new Proxy(v0, o5);
    v7.with(v7, a4, a3, o5, v7);
    ([-536870912,10000,10,-4294967295,10,-9223372036854775807]).with();
}
new F1();
gc();
