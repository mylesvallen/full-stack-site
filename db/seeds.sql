INSERT INTO property (property_name, tenant_name, tenant_rating, tenant_comment)
	VALUES ('East Hill Apartments', 'Sadie Tatum', 4, 'great place to stay'); 
INSERT INTO property (property_name, tenant_name, tenant_rating, tenant_comment)
	VALUES ('DeMiranda Management', 'Cherise Knox', 2, 
		'maintenace is slow at responding and fixing repairs 
		and no one ever answers the emergency line'); 

INSERT INTO new_account(tenant_name, tenant_email, property_name, username, password)
	VALUES('Sadie Tatum', 's.tatum@gmail.com', 'East Hill Apartments', 'statum', 'password123'); 
INSERT INTO new_account(tenant_name, tenant_email, property_name, username, password)
	VALUES('Cherise Knox', 'cknox@gmail.com', 'DeMiranda Management', 'cknox', 'password');