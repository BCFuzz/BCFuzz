const v4 = Reflect.construct(BigUint64Array, [], Date);
try { v4.toLocaleDateString(); } catch (e) {}
gc();
