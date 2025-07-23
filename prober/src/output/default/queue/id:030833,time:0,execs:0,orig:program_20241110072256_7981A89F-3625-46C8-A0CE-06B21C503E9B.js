const v1 = /[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]\p{Changes_When_NFKC_Casefolded}/mg;
const v4 = Date(undefined);
const v5 = [255n,255n,255n,255n];
const v7 = [255n,v5,,[v5,v5,v4]];
for (const v9 of "valueOf") {
    const v10 = v1 + v7;
    const v12 = this.RegExp;
    try { v12(v10, v9); } catch (e) {}
}
for (let i16 = 0, i17 = 10;
    (() => {
        for (let i20 = 0, i21 = 10; i21--, i20 < i21;) {
        }
        return i17-- < i17;
    })();
    ) {
}
for (let i36 = 0, i37 = 10; i36 < i37; i37--) {
}
gc();
