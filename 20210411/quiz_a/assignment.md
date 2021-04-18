문제1 ) GET /admin/contacts 을 동작하게 하기 위해 get_contacts 함수를 작성하려한다.

동작 Contacts 모델에서 전체 데이터를 가져와서

admin/contacts.html 으로 { contacts : contacts } 데이터를 보내고 랜더링 하는 소스를 완성하세요.





문제 2 )POST /admin/contacts 을 동작하게 하기 위해 post_contacts_write 함수를 작성하려한다.

req.body에는 아래와 같이 데이터가 날아온다.

{
  'name' : '안녕',
  'price' : 2000 ,
  'description' : '예제데이터'
}


Contacts 모델에 저장을 하고 GET /admin/contacts 로 redirect 하는 소스를 완성하세요.


문제3 )GET /admin/contacts/detail/:id  상세글보기를 동작하게 하기 위해 get_contacts_detail
 함수를 작성하려한다.

Contacts 모델에 (url 의 id)에 일치하는 데이터를 가져와서
admin/detail.html 템플릿을 { contact: contact } 데이터를 넘겨주는 함수를 완성하시오.


문제4) GET /admin/contacts/edit/:id  수정하기 뷰를 동작하게 하기 위해 
get_contacts_edit 함수를 작성하려한다.

Contacts 모델에 (url 의 id)에 일치하는 데이터를 가져와서
admin/write.html 템플릿을 { contact: contact } 데이터를 넘겨주는 함수를 완성하시오.





문제5) POST /admin/contacts/edit/:id 으로 수정하게 하기 위해 post_contacts_edit 함수를 작성하려한다.

req.body에는 아래와 같이 데이터가 날아온다.

{
  'name' : '안녕',
  'price' : 2000 ,
  'description' : '예제데이터'
}

Contacts 모델에 (url 의 id)에 일치하는 데이터를 수정하고 GET /admin/contacts/detail/ + (url 의 id)
로 redirect 하는 소스를 완성하세요.



문제6) /admin/contacts/delete/:id 글삭제하기를 하기 위해
get_contacts_delete 함수를 작성하려한다.

Contacts 모델에 (url 의 id)에 일치하는 데이터를 삭제하고 GET /admin/contacts로 redirect하는 url을 만드시오.




-------------------


GRANT ALL privileges ON wicked_db.* TO '계정'@'접속IP' IDENTIFIED BY '패스워드';

 GRANT ALL privileges ON mariadb.* TO 'root'@'localhost' IDENTIFIED BY '1234';

 FLUSH PRIVILEGES;



출처: https://wickedmagic.tistory.com/323 [사악미소의 현대마법의 공방]