const v5 = Reflect.construct(WeakSet, [[[WeakSet,WeakSet]]]);
let v6 = 4n;
v6 = v5;
gc();
