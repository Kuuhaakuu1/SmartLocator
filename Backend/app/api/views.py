from django.shortcuts import render
import pyrebase
import firebase_admin
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from firebase_admin import auth, credentials, initialize_app, storage

# Create your views here.

config={
  "apiKey": "AIzaSyBB9h0_bMcIZoxQ02K5wr63Bwpo_1uXeFA",
  "authDomain": "test-bb2ea.firebaseapp.com",
  "databaseURL": "https://test-bb2ea-default-rtdb.firebaseio.com",
  "projectId": "test-bb2ea",
  "storageBucket": "test-bb2ea.appspot.com",
  "messagingSenderId": "194533806709",
  "appId": "1:194533806709:web:abfb990b4d66420fac5e3c",
}

firebase= pyrebase.initialize_app(config)
auth=firebase.auth()
database=firebase.database() 

@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        return Response({'success': True})
    except auth.AuthError as e:
        # user authentication failed
        error_message = e.detail
        return Response({ 'success': False,'error': error_message})
    
@api_view(['POST'])
def profile_picture(request):
     
     file = request.FILES.get('profile_picture')

     if file is None:
            return JsonResponse({'error': 'No file was uploaded.'}, status=400)
     
     print(request.FILES) # Debugging statement
     try:
        bucket = storage.bucket()
        blob = bucket.blob(file.name)
        blob.upload_from_file(file)
        url = blob.public_url
        return JsonResponse({'message': 'Profile picture updated.', 'url': url}, status=200)
     except Exception as e:
        logger.error(e)
        return JsonResponse({'error': 'An error occurred while uploading the file.'}, status=500)
    

