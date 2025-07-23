const v1 = /^xxx$(?:ab)|cdeTfoo(?<=bar)baz(Ysa\sc)/dgu;
v1.toString = Date;
v1.exec(v1);
gc();
