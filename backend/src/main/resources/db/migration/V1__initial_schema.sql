create table url
(
	key varchar(255) not null
		constraint url_pkey
			primary key,
	created_at timestamp,
	url varchar(255)
);

alter table url owner to "user";

create table url_url_access
(
	url_key varchar(255) not null
		constraint fkkhuiemonqmo4axx8566duc7o4
			references url,
	accessed timestamp
);

alter table url_url_access owner to "user";

