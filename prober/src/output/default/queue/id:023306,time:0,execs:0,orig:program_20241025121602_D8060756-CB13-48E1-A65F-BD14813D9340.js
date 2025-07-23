const v0 = /a\fb\nc\rd\te\vf/du;
const v1 = /(?<=)(?: foo )*/u;
const v3 = [v1,v1,v1,v1];
Reflect.apply(v0.test, v1, v3);
gc();
