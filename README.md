# Secret Quote & To-Do API (Node.js + JWT + Bcrypt)

This is a simple authentication API built using Express.js, JWT for authentication, and Bcrypt for password hashing. It also includes a secure to-do feature and role-based admin access.

## Project Setup
1. **Clone the repository**

git clone https://github.com/keerthikelam/todo_authentication.git
cd todo_authentication

2. **Install dependencies**
   
npm install

3. **Create env file**

Create a .env file in the root directory
with:
SECRET_KEY=your_secret_key

4. **Start the Server**
   
npm start

The server will run on http://localhost:3000.


# API Testing Instructions

You can use Postman to test these endpoints.

## Testing endpoints for easy assignment

##  1. Register
<pre>
POST /api/auth/register
Content-Type: application/json

{
  "username": "yourname",
  "password": "yourpassword"
}
</pre>
  
![image](https://github.com/user-attachments/assets/53d448e1-64b7-4aa3-a3d4-8894304d9435)

## 2. Login (returns JWT)

<pre>
POST /api/auth/login
Content-Type: application/json

{
  "username": "yourname",
  "password": "yourpassword"
}
  </pre>

**Response:**
<pre>
{
  "accessToken": "your-jwt-token"
}
</pre>


![image](https://github.com/user-attachments/assets/bb8c08d4-6c9c-4971-9abe-abe14fae42ac)

 ## 3. secret-quote end point

POST /api/secret-quote
  
Authorization: Bearer <accessToken>
  
![image](https://github.com/user-attachments/assets/ab2fc03b-648d-4fa0-9937-5b366b59a3a1)

### forbidden

![image](https://github.com/user-attachments/assets/64732b23-4d8c-4008-9db0-d7b99fbd6299)

### missing token

![image](https://github.com/user-attachments/assets/76826131-2fd3-4c5a-9485-19dcb474042b)

   
## enhancing security using bcrypt
### register
![image](https://github.com/user-attachments/assets/5c5f0bd3-05d0-45e7-9a55-33f8fc05baaa)
  
### login after bcypt
![image](https://github.com/user-attachments/assets/9237a82f-f643-48cd-a10b-6b3596816a98)
  
### CRUD for todos
### post a todo
![image](https://github.com/user-attachments/assets/a1a88966-f8a8-4e68-83ab-085d47809326)
![image](https://github.com/user-attachments/assets/9747f686-96c2-4af3-ad15-1ac8234fc8b4)

### get todos of that user
![image](https://github.com/user-attachments/assets/57d579a5-df28-4294-9515-3c9db248c88d)


### delete a todo
![image](https://github.com/user-attachments/assets/e9e527dd-ac9b-4dd8-973e-bdcf14aab937)
![image](https://github.com/user-attachments/assets/bb87c81e-6a93-4737-9668-7690005d5e30)
  
### login as admin
![image](https://github.com/user-attachments/assets/44a14b40-32f9-46db-9be4-ace163b6c1df)

### admin - all-todos
![image](https://github.com/user-attachments/assets/0aaa6042-1794-4ac1-ae42-4b0091198b54)
