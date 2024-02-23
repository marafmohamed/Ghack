


#! ------------------------------------------------------------------------------------------------------
#!                                  # Gemini Vision
#! ------------------------------------------------------------------------------------------------------

# =================================================================================================
# Model : gemini_vision (Base Model)
# Speciality: Base Model
# prompt : {"prompt":"WHO IS THIS","role":"you are Unes Fan","images":[image1,Image2]}
# =================================================================================================
@app.route('/image2txt/gemini_vision', methods=['POST'])
def image2text_gemini():
    try:
        if 'images' in request.files and 'prompt' in request.form and 'role' in request.form:
            image_file = request.files['images']
            prompt = request.form['prompt']
            role = request.form['role']

            data = {"prompt": prompt, "role": role}

            app.logger.info(f"Received data: {data}")

            result = core.gemini_img2txt(data, image_file)

            return jsonify({"status": "success", "result": result})
        else:
            return jsonify({"status": "error", "message": "Invalid request format"}), 400

    except Exception as e:
        app.logger.error(f"Error processing request: {str(e)}")
        return jsonify({"status": "error", "message": f"Error generating vision image: {str(e)}"}), 500


#! ------------------------------------------------------------------------------------------------------
#!                                    # AUDIO TO TEXT 
#! ------------------------------------------------------------------------------------------------------
        
# =================================================================================================
# Model : BLIP_IMAGE_CAPTIONING_LARGE 
# Speciality: Base Model
# prompt : {"file":file}
# =================================================================================================
@app.route('/audio2txt/WHISPER_LARGE_V2', methods=['POST'])
def audio2text_WHISPER():
        try:
            if 'file' not in request.files:
                return jsonify({'error': 'No file part'}), 400

            file = request.files['file']
            if file.filename == '':
                return jsonify({'error': 'No selected file'}), 400

            output = core.audio2text(file)
    
            return jsonify({"status": "success", "text":output})

        except Exception as e:
            print(e)
            return jsonify({"status": "error", "message": f"Error generating text: {str(e)}"}),500

    

#! ------------------------------------------------------------------------------------------------------
#!                                    # Text to audio
#! ------------------------------------------------------------------------------------------------------

# =================================================================================================
# Model : MMS_TTS_ENGs 
# Speciality: Base Model
# prompt : {"prompt":"hello world!"}
# =================================================================================================
@app.route('/txt2audio/MMS_TTS_ENG', methods=['POST'])
def text2audio_MMS_TSS_ENG():
        try:
            data = request.get_json()
            text_input = data.get('prompt')

            audio_bytes = core.text2audio(text_input,txt2audio_MMS_TTS_ENG_api_token)

            return jsonify({'audio': base64.b64encode(audio_bytes).decode('utf-8')})

        except Exception as e:
            print(e)
            return jsonify({'error': str(e)}), 500

# Launch your server 
app.run(debug=True)
""""


# Before :

Dear Dingo, You are cordially invited to Ghack, an exclusive gathering in the Asia-Pacific 
region. Join us for an evening of networking, insights, and entertainment. 
Kindly RSVP by 2024/03/03. We look forward to your presence. Warm 
regards, Younes

# After applying summrization :

- Invitation to Ghack
- an exclusive gathering in the Asia-Pacific 
- RSVP by March 3, 2024
- Networking, insights, and entertainment will be provided.









"""