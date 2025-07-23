const v0 = /Q[\p{Script_Extensions=Mongolian}&&\p{Number}]B[\ca]((?<=)[\1111]a+b*)/mgis;
const v4 = [[[v0,v0],v0]];
Reflect.apply(v0.test, v0, v4);
gc();
