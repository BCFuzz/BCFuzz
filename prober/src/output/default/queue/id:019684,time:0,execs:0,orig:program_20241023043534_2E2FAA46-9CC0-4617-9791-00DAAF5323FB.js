const v0 = /(?:a{5,1000000}){3,1000000}/iu;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a4.test(a4);
}
new F1(F1, v0);
gc();
