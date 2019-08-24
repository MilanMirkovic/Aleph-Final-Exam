-- insert users
-- password is 12345 (bcrypt encoded) 
insert into security_user (username, password, first_name, last_name) values 
	('admin', '$2a$04$4pqDFh9SxLAg/uSH59JCB.LwIS6QoAjM9qcE7H9e2drFuWhvTnDFi', 'Admin', 'Admin');
-- password is abcdef (bcrypt encoded)
insert into security_user (username, password, first_name, last_name) values 
	('petar', '$2a$04$Yr3QD6lbcemnrRNLbUMLBez2oEK15pdacIgfkvymQ9oMhqsEE56EK', 'Petar', 'Petrovic');

-- insert authorities
insert into security_authority (name) values ('ROLE_ADMIN'); -- super user
insert into security_authority (name) values ('ROLE_USER'); -- normal user

-- insert mappings between users and authorities
insert into security_user_authority (user_id, authority_id) values (1, 1); -- admin has ROLE_ADMIN
insert into security_user_authority (user_id, authority_id) values (1, 2); -- admin has ROLE_USER too
insert into security_user_authority (user_id, authority_id) values (2, 2); -- petar has ROLE_USER


insert into projekat(naziv,opis,read_me) values ("Android OS","Android is a mobile operating system developed by Google.","Android is a mobile operating system developed by Google. It is based on a modified version of the Linux kernel and other open source software, and is designed primarily for touchscreen mobile devices such as smartphones and tablets. "),
("Angular", "Originally, the rewrite of AngularJS was called Angular 2 by the team, but this led to confusion among developers.","All the major releases are supported for 18 months. This consists of 6 months of active support, during which regularly-scheduled updates and patches are released. It is then followed by 12 months of long-term support (LTS), during which only critical fixes and security patches are released."),
("Bootstrap" ,"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.","Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation and other interface components."),
("SpringBoot","The Spring Framework is an application framework and inversion of control container for the Java platform.","The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE (Enterprise Edition) platform. Although the framework does not impose any specific programming model, it has become popular in the Java community as an addition to, or even replacement for the Enterprise JavaBeans (EJB) model. The Spring Framework is open source."),
("React" ,"React (also known as React.js or ReactJS) is a JavaScript library[3] for building user interfaces.","React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an AP");



insert into komentar(down_vote,ime_korisnika,komentar,up_vote,projekat_id) values (0,"Pera","Nije lose", 0, 1),(0,"Sima","Moze Bolje", 0, 2),(0,"Pera","Svidja mi se ovaj projekat", 0, 3),(0,"Milica","OVo sam cekala", 0, 4),(0,"Marko","Oduvek sam voleo spring boot", 0, 5);