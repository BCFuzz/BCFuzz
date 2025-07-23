const v0 = /(E(?<a>(?<b>(?<c>(?<d>.).).).)*)/iu;
const v1 = /\1\2(a(?:\1(b\1\2))\2)\1+/mdgsu;
v0.toString(v1, v1).replace(v1);
gc();
