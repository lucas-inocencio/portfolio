FROM python:3

WORKDIR /code

COPY requirements.txt /code

COPY . /code

RUN pip install -r requirements.txt 

EXPOSE 8000

CMD sh -c "python manage.py runserver 0.0.0.0:8000"