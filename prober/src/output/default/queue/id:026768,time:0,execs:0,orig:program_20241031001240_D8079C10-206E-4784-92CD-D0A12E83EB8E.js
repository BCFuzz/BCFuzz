const v1 = /a*?a{1,2}?(foo[z]*(\118(\P{scx=Greek}a{0,1}?(x)(x)(x)\1+)*))/dis;
v1[Symbol.toPrimitive] = Date;
v1.exec(v1);
gc();
