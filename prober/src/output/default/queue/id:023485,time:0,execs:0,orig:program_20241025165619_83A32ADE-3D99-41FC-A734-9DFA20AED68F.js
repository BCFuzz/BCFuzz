const v1 = /(?:a{5,1000000}){3,1000000}/iu;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5[Symbol.toPrimitive] = Date;
    a5.test(a5);
}
new F2(F2, v1);
gc();
