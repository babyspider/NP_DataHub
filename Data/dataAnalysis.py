# import statements

import csv
import statistics

import numpy as np
import plotly.express as px

# importing the file to analyze and putting it in a list
file = "NTEE_OS_Housing_Master_OSTeam - Master.csv"
values = []
with open(file, "r") as filer:
    read = csv.reader(filer)
    for value in read:
        values.append(value)
values.pop(0)

# pulling and converting liability values
liabilities = []
for x in range(0, len(values)):
    if values[x][364] != "":
        liabilities.append(float(values[x][364]))

# pulling and converting liability values
assets = []
for x in range(0, len(values)):
    if values[x][363] != "":
        assets.append(float(values[x][363]))

# finding median of assets and liabilities
medLiabilities = statistics.median(liabilities)

# comparing one np to the median in liabilities
fig = px.scatter(x=liabilities, y=assets)
fig.show()
