const v1 = /(E(?<a>(?<b>(?<c>(?<d>.).).).)*)/iu;
const v2 = /\1\2(a(?:\1(b\1\2))\2)\1+/mdgsu;
v2.toString = Date;
v2.toString().replace(v1);
gc();
