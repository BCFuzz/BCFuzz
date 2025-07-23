const v1 = /a\fb\nc\rd\te\vf/du;
const v2 = /(?<=)(?: foo )*/u;
v2[Symbol.toPrimitive] = Date;
const v6 = [v2];
Reflect.apply(v1.test, v2, v6);
gc();
