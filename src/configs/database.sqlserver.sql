create schema APP_SCHEMA_DEV

CREATE TABLE  APP_SCHEMA_DEV.PRODUCT (id varchar(max), name varchar(max), request_url varchar(max), url varchar(max), maintance bit default(0), homologation bit default(0))
