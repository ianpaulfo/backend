# backend
Back end repo



Models
Users
{
    
    username: string,  *REQUIRED*   
    email: string, *REQUIRED*
    password: string  *REQUIRED*
    
}
Strain
{
    user_id: int,               *REQUIRED*
    strain_name: string,        *REQUIRED*
    strain_type: string,        *REQUIRED*
}

Endpoints
Users
Request Type	Endpoint	Description
POST	/api/auth/register	Creates User
POST	/api/auth/login	Creates JWT
GET	/api/auth/logout	logs out of session
GET	/api/users/:id	Returns User By ID
PUT	/api/users/:id	Update User
DELETE	/api/users/:id	Remove User
Strain
Request Type	Endpoint	Description
GET	api/strain/:id/strain	Get All User Strains
GET	api/strain/:id/strain/:strain_id	Get Specific User Strain
POST	api/strain/:id/strain	Add User Strain
PUT	api/strain/:id/strain/:strain_id	Update User Strain
DELETE	api/strain/:id/strain/:strain_id