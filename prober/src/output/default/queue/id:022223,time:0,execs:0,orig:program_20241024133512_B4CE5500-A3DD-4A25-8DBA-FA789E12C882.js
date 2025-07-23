function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = /B\p{Changes_When_NFKC_Casefolded}/dgiu + a3;
    try { eval(v6); } catch (e) {}
}
new F0();
gc();
