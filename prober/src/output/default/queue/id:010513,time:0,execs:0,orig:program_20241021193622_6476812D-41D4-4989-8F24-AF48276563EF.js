const v1 = new WeakSet();
v1.toString.call(-1.7976931348623157e+308);
gc();
