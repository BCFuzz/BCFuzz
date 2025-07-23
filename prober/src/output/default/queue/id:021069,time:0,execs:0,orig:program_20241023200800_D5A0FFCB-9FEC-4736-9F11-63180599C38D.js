const v1 = /f[\p{Script_Extensions=Mongolian}&&\p{Number}]*/mvgi;
Object.defineProperty(v1, "toString", { writable: true, configurable: true, enumerable: true, value: Date });
/(?<a>(?<b>(?<c>(?<d>.).).).)\1\2(a(?:\1(b\1\2))\2)\1/giu.test(v1);
gc();
