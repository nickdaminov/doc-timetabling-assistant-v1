
cd ../virtualenvfolder/doctimetable/bin/   # goes to bin dir of the virtualenv
source activate                            # activates virtualenv
cd ../../../Backend                        # return to working dir
python doc_ta/manage.py runserver          # runs django server