const v3 = Array(456);
v3.push(0.08232904114071671);
Reflect.apply(([Array,Array]).splice, v3, v3);
gc();
