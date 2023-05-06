#!/bin/bash

# script that create web_dynamic and start flask

#creating web_dynamic
mkdir -p web_dynamic

#copying files to webdynamic
cp -r web_flask/static web_dynamic/
cp web_flask/templates/100-hbnb.html web_dynamic/0-hbnb.html
cp web_flask/__init__.py web_dynamic/
cp web_flask/100-hbnb.py web_dynamic/0-hbnb.py

#replace route in 0-hbnb.py
sed -i 's@app.route('/100-hbnb/')@app.route('/0-hbnb/')@' web_dynamic/0-hbnb.py

#start Flask web app
export FLASK_APP=web_dynamic/0-hbnb.py
flask run
