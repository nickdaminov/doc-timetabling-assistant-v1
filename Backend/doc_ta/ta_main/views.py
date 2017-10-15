# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import request, response

from django.shortcuts import render

# Create your views here.

def test_view(request):
    return response.HttpResponse(content="HELLO WORLD",status=200)