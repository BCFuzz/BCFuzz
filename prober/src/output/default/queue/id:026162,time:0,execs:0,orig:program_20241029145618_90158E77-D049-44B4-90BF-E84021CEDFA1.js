const v1 = /5a\W/mvg;
v1.compile(512n);
Date.parse(v1);
gc();
