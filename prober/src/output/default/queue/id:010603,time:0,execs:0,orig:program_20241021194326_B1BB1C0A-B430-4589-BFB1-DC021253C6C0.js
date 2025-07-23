const v0 = /(E(?<a>(?<b>(?<c>(?<d>.).).).)*)/iu;
/\1\2(a(?:\1(b\1\2))\2)\1+/mdgsu.toString().replace(v0);
gc();
