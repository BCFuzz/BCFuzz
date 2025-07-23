let v1 = eval;
v1("");
v1 ||= v1;
gc();
