const v0 = /D(?:ab|cde)V\w|\d\cAf?/mysu;
const v2 = /B\p{Changes_When_NFKC_Casefolded}/dgiu + v0;
try { eval(v2); } catch (e) {}
gc();
