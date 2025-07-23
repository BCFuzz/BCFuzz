const v0 = /A\p{Changes_When_NFKC_Casefolded}/misu;
const v1 = /1a\w/dysu;
v1.sticky >>= v0.__proto__;
gc();
