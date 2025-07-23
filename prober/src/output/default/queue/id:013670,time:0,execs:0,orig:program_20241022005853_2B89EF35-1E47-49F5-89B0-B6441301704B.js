const v1 = /\p{Nd}p3(?<=)Z(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10+/vis.toString();
try { Reflect.setPrototypeOf(Reflect, v1); } catch (e) {}
gc();
