const v1 = /abc|def(\2)(\1)?/ygiu;
v1[Symbol.toPrimitive] = Date;
v1.exec(v1);
gc();
