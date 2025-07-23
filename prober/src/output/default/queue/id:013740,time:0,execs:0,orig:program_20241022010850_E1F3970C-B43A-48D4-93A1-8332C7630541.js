const v1 = /(E(?<a>(?<b>(?<c>(?<d>.).).).)*)/iu;
v1.toString = Date;
const v2 = /\1\2(a(?:\1(b\1\2))\2)\1+/mdgsu;
v1.toString().replace(v2);
gc();
