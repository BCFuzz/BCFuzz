const o1 = {
};
o1.b = 1073741824;
delete o1.b;
Reflect.defineProperty(Reflect, Reflect, o1);
gc();
