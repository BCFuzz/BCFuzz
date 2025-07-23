const v2 = new WeakSet();
v2.toString.call(null);
gc();
