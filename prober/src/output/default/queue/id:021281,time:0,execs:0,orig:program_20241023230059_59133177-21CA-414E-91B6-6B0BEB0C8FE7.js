function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new F5("13", undefined, undefined);
"13" in v10;
gc();
