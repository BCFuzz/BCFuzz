function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = /\p{gc=Nd}/mis;
        v7.test(v7);
    }
    new F5();
}
new F0(F0, F0, F0);
const v13 = /\cAhs[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]/mdyiu.constructor.leftContext;
try { v13.matchAll(v13); } catch (e) {}
gc();
