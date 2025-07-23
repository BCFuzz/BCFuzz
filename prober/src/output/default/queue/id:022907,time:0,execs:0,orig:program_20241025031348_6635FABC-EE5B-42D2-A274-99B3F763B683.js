function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 50; v3++) {
        const v4 = [4294967295,-4294967297,9076,127,4294967295,-1933707790];
        v4[4] = F0;
        const v5 = v4.indexOf(a2);
        v5 / v5;
    }
}
const v7 = new F0();
const v8 = v7.constructor;
new v8();
new F0(v8);
gc();
