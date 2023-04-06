    FROM python:3.9-alpine3.13

    ENV PYTHONUNBUFFERED=1

    #WORKDIR /django_app



    # RUN pip install --upgrade pip
    # RUN pip install -r requirements.txt





    COPY . ./django_app
    COPY ./scripts /scripts
    COPY requirements.txt /django_app
    WORKDIR /django_app
    EXPOSE 8000


    RUN python -m venv /py && \
        /py/bin/pip install --upgrade pip && \
        apk add --update --no-cache postgresql-client && \
        apk add --update --no-cache --virtual .tmp-deps  \
            build-base postgresql-dev musl-dev linux-headers && \
        /py/bin/pip install -r requirements.txt && \
        /py/bin/pip install pyrebase4 && \
        /py/bin/pip install firebase-admin && \
        /py/bin/pip install django-cors-headers && \
        /py/bin/pip install djangorestframework && \
        apk del .tmp-deps && \ 
        adduser --disabled-password --no-create-home app  && \
        mkdir -p /vol/web/static && \
        mkdir -p /vol/web/media && \
        chown -R app:app /vol && \
        chmod -R 755 /vol && \
        chmod -R +x /scripts
        
    ENV PATH="/scripts:/py/bin:$PATH"

   

   CMD ["python", "manage.py", "runserver"]
