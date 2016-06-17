INSERT INTO models (DOI, papertitle, modeltitle, yearofpub, authors, must, mustnot, mustCUI, mustnotCUI, inpname, inpdesc, inpCUI, inpunits, inpdatatype, upper, lower, output, outcome, outcometime, outputCUI, outcomeCUI, filename, filepointer, datumname, datum, language, uncompiled, compiled, dependList, example, model_category, type, metric, value, lcl, ucl) VALUES ('10.1161/01.CIR.97.18.1837', 'Prediction of Coronary Heart Disease Using Risk Factor Categories', 'LDL Cholesterol Point System (Figures 3 and 4)', '1998', '["Wilson, P.W.", "DAgostino,R.B."]', '[""]', '["Coronary Heart Disease"]', '[""]', '["C2926063"]', '["sex", "age", "ldl cholesterol", "hdl cholesterol", "systolic BP", "diastolic BP", "diabetic", "smoker"]', '["Male = True", "age", "low-density lipoprotein cholesterol", "hdl cholesterol", "systolic BP", "diastolic BP", "diabetic", "smoker"]', '["C0086582", "C0804405", "C0364225", "C0364221", "C0488055", "C0488052", "C1315719", "C3496611"]', '["m=T", "years", "mg/dL", "mg/dL", "mmHg", "mmHg", "", ""]', '["bool", "float", "float", "float", "float", "float", "bool", "bool"]', '["", "74", "", "", "", "", "", ""]', '["", "30", "", "", "", "", "", ""]', '10Y Risk of Coronary Heart Disease', 'Coronary Heart Disease', '10', 'C3176182', 'C2926063', '[""]', '[""]', '["Sample Size"]', '["5345"]', 'python', '["model_d.py"]', '[""]', 'requirements.txt', '["example_d.py"]', '["prognostic"]', '[]', '[]', '[]', '[]', '[]')