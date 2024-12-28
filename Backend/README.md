# User Registration API Documentation

## Description

Endpoint for registering a new user in the system.

### Endpoint

```
POST /user/register
```

### Request Body

| Field     | Type   | Description          | Required |
| --------- | ------ | -------------------- | -------- |
| firstName | string | User's first name    | Yes      |
| lastName  | string | User's last name     | Yes      |
| email     | string | User's email address | Yes      |
| password  | string | User's password      | Yes      |

### Response Status Codes

| Status Code | Description                      |
| ----------- | -------------------------------- |
| 201         | User successfully registered     |
| 400         | Bad Request - Invalid input data |
| 409         | Conflict - Email already exists  |
| 500         | Internal Server Error            |

### Example Request

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Example Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
}
```

### Example Error Response

```json
{
  "status": "error",
  "message": "Email already exists"
}
``` 

---

# User Login API Documentation

## Description
Endpoint for user authentication and login.

### Endpoint
```
POST /user/login
```

### Request Body
| Field     | Type   | Description          | Required |
|-----------|--------|----------------------|----------|
| email     | string | User's email address | Yes      |
| password  | string | User's password      | Yes      |

### Response Status Codes
| Status Code | Description                             |
|-------------|-----------------------------------------|
| 200         | Login successful                        |
| 400         | Bad Request - Invalid input data        |
| 401         | Unauthorized - Invalid email or password |
| 500         | Internal Server Error                   |

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Example Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
}
```

### Example Error Response
```json
{
  "message": "Invalid Email or password"
}
```
