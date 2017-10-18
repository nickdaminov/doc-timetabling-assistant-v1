# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import request, response
from django.shortcuts import render
import datetime
import os

def read_from_asp_result(result_src):
    f = open(result_src)
    data = f.read()
    f.close()
    return data


def run_clingo(input_src, output_src):
    command_string = "./asp/clingo --outf=2 <" + input_src + ">" + output_src
    os.system(command_string)


def test_view(request):
    input_src = "./asp/src/sudoku.in"
    output_src = "result.out"
    run_clingo(input_src, output_src)
    data = read_from_asp_result(output_src)
    return response.HttpResponse(content=data, status=200)