from __future__ import print_function
import json

from flask import request

from flask import Flask, render_template,redirect,url_for,request


from testing_script import test

app = Flask(__name__)
@app.route('/', methods=['POST','GET'])
def page1():
    return render_template("index.html")
@app.route('/projections', methods=['POST','GET'])
def page2():
    
    if request.method=="POST":
        city_data=request.form["location"]
        date=request.form["forecast"]
        print(city_data,date)
    
        return redirect(url_for("home",location_data=city_data,date_data=date))
    else: 
        return render_template("projections.html")
@app.route('/sheltermap', methods=['POST','GET'])
def page3():
    return render_template("sheltermap.html")
@app.route('/tips', methods=['POST','GET'])
def page4():
    return render_template("tips.html")
@app.route("/<location_data>/<date_data>",methods=['POST','GET'])
def home(location_data,date_data):
     
     output = test(location_data,date_data)
    
     return render_template("projection_output.html",location=location_data,date_data=date_data,prediction_return=output) 

if __name__ == "__main__":
    app.run()