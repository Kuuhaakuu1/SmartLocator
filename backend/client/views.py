from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from services.products_services import ProductServices
from services.portfolio_services import PortfolioServices
from services.book_service  import BookServices
from services.team_services import TeamServices
from services.about_services import AboutServices
from django.contrib.auth import authenticate
import pyrebase
import firebase_admin
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from firebase_admin import auth, credentials, initialize_app


# @api_view(['GET', 'POST'])
# def book_list(request):
#     """This API return a list of book"""
#     if request.method == 'GET':
#         data = BookServices.get_book_list()
#         return Response(data)

 
# @api_view(['GET', 'POST'])
# def services_list(request):
#     """This API return a list of services"""
#     if request.method == 'GET':
#         data = ProductServices.get_product_services()
#         return Response(data)

# @api_view(['GET', 'POST'])
# def portfolio_list(request):
#     """This API return a portfolio"""
#     if request.method == 'GET':
#         data = PortfolioServices.get_portfolio_list()
#         return Response(data)


# @api_view(['GET', 'POST'])
# def team(request):
#     """This API return a list of team members"""
#     if request.method == 'GET':
#         data = TeamServices.get_team_list()
#         return Response(data)

# @api_view(['GET', 'POST'])
# def about(request):
#     """This API return a services """
#     if request.method == 'GET':
#         data = AboutServices.get_about_list()
#         return Response(data)
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