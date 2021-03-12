# Django & React

- django-admin startproject

- pip install django

- python manage.py startapp posts # app 초기화
- python manage.py migrate
- settings.py 에 posts 추가

- models.py admin.py 수정

```powershell
C:\~\django-react\backend> python manage.py makemigrations
...
C:\~\django-react\backend> python manage.py migrate
...
C:\~\django-react\backend> python manage.py createsuperuser
...
C:\~\django-react\backend> python manage.py runserver
```

- db에 데이터 추가하기
- django-rest-framework 구성
- 시리얼라이져 작성
- views.py 작성

- urls.py 작성 (app -> main 순)

- HTTP 접근제어 규약(CORS : Cross-Origin Resource Sharing)을 추가하여 연결

- pip install django-cors-headers

  ### 리액트앱 생성

```shell
npm install -g create-react-app
#npm을 이용한 방법
npx create-react-app frontend
```

- npm start

- app.js jsx 작성
- 디렉토리 구조 확인