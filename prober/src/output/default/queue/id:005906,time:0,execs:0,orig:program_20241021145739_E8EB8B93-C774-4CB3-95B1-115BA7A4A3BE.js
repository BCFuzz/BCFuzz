class C3 extends Set {
}
const v5 = [];
const v6 = Reflect.construct(C3, v5);
v6.add();
const v8 = v6.difference(v6);
const v9 = new Uint16Array(Reflect, v8, v8);
const v10 = v9.constructor;
const v12 = new Int16Array(v10, v8, v6);
const v13 = new Int16Array(v5, v8, 128);
Reflect.apply(v13.copyWithin, v12, v10).fill().join(128);
gc();
