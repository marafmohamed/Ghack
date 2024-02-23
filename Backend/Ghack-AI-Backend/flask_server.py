from config import *
from flask import Flask, jsonify, request
from flask_cors import CORS

# Define your flask server
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

#! ------------------------------------------------------------------------------------------------------
#!                                  # Text Classification
#! ------------------------------------------------------------------------------------------------------

# =================================================================================================
# Model : Gemma
# Speciality: Base Model
# prompt : {"content":"HERE IS YOUR MAIL","categories":["A","LIST","OF","CATEGORIES"]}
# =================================================================================================
@app.route('/mail_classification/text', methods=['POST'])
def classify_mail():

    
    try:
        data = request.json
        content = data["content"]
        categories = data["categories"]
        

        result = core.text_generation(classification_role + str(categories) + classification_sub_role, content)
   
        return jsonify({"status": "success", "result": result})

    except Exception as e:
        return jsonify({"status": "error", "message": f"Error generating text: {str(e)}"}),500
    


#! ------------------------------------------------------------------------------------------------------
#!                                  # Text Summarization
#! ------------------------------------------------------------------------------------------------------

# =================================================================================================
# Model : Gemma
# Speciality: Base Model finetuned for summarization tasks
# prompt : {"contetn":"THE MAIL YOU WANT IT TO GET SUMMARIZE"}
# =================================================================================================
@app.route('/mail_summarization', methods=['POST'])
def summrize_mail():

    
    try:
        data = request.json
        content = data["content"]
        

        result = core.text_generation(summarization_role , content)
   
        return jsonify({"status": "success", "result": result})

    except Exception as e:
        return jsonify({"status": "error", "message": f"Error generating text: {str(e)}"}),500
    




#! ------------------------------------------------------------------------------------------------------
#!                                  # Mail Spam Detector
#! ------------------------------------------------------------------------------------------------------

# =================================================================================================
# Model : Gemma
# Speciality: Base Model finetuned for Mail Spam detection
# prompt : {"contetn":"THE MAIL YOU WANT IT Verified for security"}
# =================================================================================================
@app.route('/mail_spam_detection', methods=['POST'])
def mail_spam_detection():

    
    try:
        data = request.json
        content = data["content"]
        

        result = core.text_generation(spam_detection_role , content)
   
        return jsonify({"status": "success", "result": result})

    except Exception as e:
        return jsonify({"status": "error", "message": f"Error generating text: {str(e)}"}),500
    



#! ------------------------------------------------------------------------------------------------------
#!                                  # Respond Generator
#! ------------------------------------------------------------------------------------------------------

# =================================================================================================
# Model : Gemma
# Speciality: Respond 
# prompt : {"contetn" : "YOUR MAIL HERE"}
# =================================================================================================
    
@app.route('/mail_respond_generator', methods=['POST'])
def mail_respond():
    try:
        data = request.json
        content = data["content"]

        

        result = core.text_generation(respond_role , content)
   
        return jsonify({"status": "success", "result": result})

    except Exception as e:
        return jsonify({"status": "error", "message": f"Error generating text: {str(e)}"}),500
    





# Launch your server 
app.run(debug=True)
