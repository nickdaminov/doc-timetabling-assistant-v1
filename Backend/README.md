FOLDER STRUCTURE
1) the folder doc_ta is top level django project folder
2) doc_ta/doc_ta is the location of settings and master url settings
3) doc_ta/ta_main is the app folder for the main features of timetabling assistant

SOME FILES
1) requirements.txt - holds all the python dependencies and installed libs
2) update_dependencies.sh - run this to update the requirements.txt after a new pip install
3) run_server.sh - it is the script that will execute using the command docker-compose up
                 should apply migrations to database
4) make_migrations.sh - this will run within a docker to make using the docker db instance


RUNNING TESTS IN DOCKER
1) from root run : sudo docker-compose run web Backend/doc_ta/manage.py test
2) if u want only some tests run check how it is done in Django(for example run:[whole command] ta_main.tests.test_asp_manipulators_tests)