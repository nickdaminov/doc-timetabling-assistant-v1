from exceptions import IndexError, KeyError


def tokenize_asp_term(term):
    # split to parts before and after opening bracket
    try:
        tokens = term.split('(')
        id = tokens[0]
        # gets everything until closing bracket
        params_string = tokens[1].split(')')
        # tokenizes params from commas
        params = params_string[0].split(',')
        return {"id": id, "params": params}
    except IndexError:
        return None


def json_term_to_asp_string(json_term):
    try:
        param_list = json_term["params"]
        params_string = param_list[0]
        for i in range(1,len(param_list)):
            params_string += ',' + param_list[i]

        total_string = json_term["id"] + '(' + params_string + ')'
        return total_string
    except KeyError:
        return None
