# RUNNING THIS FILE SHOULD INSTALL ALL DEV TOOLS
# NOTE: requires global pip to operate (don't want to install pip since it will be a global thing)


# INSTALLATION OF BACKEND

# INSTALLS VIRTUALENV
echo [INSTALLING VIRTUALENV]
pip install virtualenv && echo [INSTALLED VIRTUALENV SUCCESSFULLY]

# CREATES AND ACTIVATES PYTHON VIRTUAL ENVIRONMENT
echo [CREATING VIRTUALENV FOLDER]
mkdir virtualenvfolder
virtualenv ./virtualenvfolder/doctimetable # creates virtualenv folder
cd virtualenvfolder/doctimetable/bin/      # goes to bin dir of the virtualenv
source activate && echo [ACTIVATE Virtualenv]   # activates virtualenv
cd ../../../                               # returns to root

# INSTALLS DJANGO/PYTHON AND RELATING DEPENDENCIES
echo [INSTALLING DEPENDENCIES]
cd Backend
./install_dependencies.sh && echo [FINISHED INSTALLING DEPENDENCIES]

# INSTALL postgresql
echo [INSTALLING POSTGRESQL]
sudo apt-get install postgresql && echo [INSTALLED POSTGRESQL SUCCESSFULLY]

# INSTALLS FRONTEND REACT AND OTHER DEPENDENCIES
echo [INSTALLING FRONTEND]
echo TODO:
# TODO:
