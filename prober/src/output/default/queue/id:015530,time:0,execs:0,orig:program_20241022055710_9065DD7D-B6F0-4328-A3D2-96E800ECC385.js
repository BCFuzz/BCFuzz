function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        for (let i9 = -3, i10 = 10; i9 < i10; i10--) {
        }
        const v17 = /\p{gc=Nd}/mis;
        v17.test(v17);
    }
    new F5();
}
new F0();
const v21 = /\cAhs[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]/mdyiu;
const v23 = v21.constructor.leftContext;
try { v23.search(v21); } catch (e) {}
gc();
