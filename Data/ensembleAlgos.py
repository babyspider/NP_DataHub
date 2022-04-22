#import statements
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

from sklearn.datasets import make_moons
from sklearn.metrics import accuracy_score
from sklearn.metrics import RocCurveDisplay
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier,AdaBoostClassifier, RandomForestRegressor, AdaBoostRegressor, GradientBoostingRegressor, VotingRegressor
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import StackingRegressor
import plotly.graph_objects as go

df = pd.read_csv("revenues.csv")

X = df.iloc[:, 0:4].dropna()
#df["NetGainLoss1"] = df["NetGainLoss1"] /df["NetGainLoss1"].abs().max()
y = df.loc[:, "RevTotal5"].dropna()

print(y.size)


print(X)
print(y)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state = 3)

#print(X_train)
#print(X_test)
#print(y_train)
#print(y_test)


#multipl estimators
params_rf = {"n_estimators": [50, 100, 200]}


#create a new random forest regressor
rf = RandomForestRegressor(criterion="squared_error", min_samples_leaf=3, min_samples_split=3, max_depth=10)

#use grid search for each estimator
rf_gs = GridSearchCV(rf, params_rf, cv=5)
#fit model to training data
rf_gs.fit(X_train, y_train)
#save best fit
rf_best = rf_gs.best_estimator_

#ada boost regressor
ada = AdaBoostRegressor()

ada_gs = GridSearchCV(ada, params_rf, cv=5)
ada_gs.fit(X_train, y_train)
ada_best = ada_gs.best_estimator_


#gradient boost regressor
grad = GradientBoostingRegressor()

grad_gs = GridSearchCV(grad, params_rf, cv=5)
grad_gs.fit(X_train, y_train)
grad_best = grad_gs.best_estimator_




estimators=[("rf", rf_best), ("ada", ada_best)]

reg = StackingRegressor(
    estimators= estimators, final_estimator = grad_best
     )

fit = reg.fit(X_train, y_train)



print("Stacking Score: ", fit.score(X_test, y_test))

full_fit = reg.predict(X)
print(len(full_fit))



print(X.iloc[:,0].to_numpy())

fifth = pd.DataFrame(full_fit, columns = ["RevTotal5"])

full = pd.concat([X, fifth], axis = 1)


plt.figure()
plt.scatter(fifth, y.to_numpy())

print(full)

times = [1,2,3,4,5]


x = np.arange(0, 10000000)
plt.ylim(0,10000000)
plt.xlim(0,10000000)
plt.plot(x,x)
plt.show()

plt.figure()

plt.ylim(100000,1000000)

for i in range(0, 10):
	plt.plot(times, full.iloc[i,:].to_numpy())

plt.show()

#prediction
Z = df.iloc[:, 1:5].dropna()
prediction = reg.predict(Z)
print(prediction)

#check best n_estimators value
print(rf_gs.best_params_)
print(ada_gs.best_params_)
print(grad_gs.best_params_)
print("rf: {}".format(rf_best.score(X_test, y_test)))
print("ada: {}".format(ada_best.score(X_test, y_test)))
print("gb: {}".format(grad_best.score(X_test, y_test)))

print("ensemble: {}".format(ensemble.score(X_test, y_test)))
