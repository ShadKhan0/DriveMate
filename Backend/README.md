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

---

# User Profile API Documentation

## Description
Endpoint to get the current user's profile information.

### Endpoint
```
GET /user/profile
```

### Headers
| Field          | Value                            | Required |
|----------------|----------------------------------|----------|
| Authorization  | Bearer {token}                   | Yes      |

### Response Status Codes
| Status Code | Description                      |
|-------------|----------------------------------|
| 200         | Success                          |
| 401         | Unauthorized - Invalid token     |
| 500         | Internal Server Error            |

### Example Success Response
```json
{
  "id": "user_id",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

### Example Error Response
```json
{
  "message": "Unauthorized"
}
```

---

# User Logout API Documentation

## Description
Endpoint to logout the current user and invalidate their token.

### Endpoint
```
GET /user/logout
```

### Headers
| Field          | Value                            | Required |
|----------------|----------------------------------|----------|
| Authorization  | Bearer {token}                   | Yes      |

### Response Status Codes
| Status Code | Description                      |
|-------------|----------------------------------|
| 200         | Successfully logged out          |
| 401         | Unauthorized - Invalid token     |
| 500         | Internal Server Error            |

### Example Success Response
```json
{
  "message": "Logged out successfully"
}
```

### Example Error Response
```json
{
  "message": "Unauthorized"
}
```

---

# Captain Registration API Documentation

## Description
Endpoint for registering a new captain in the system.

### Endpoint
```
POST /captains/register
```

### Request Body
| Field               | Type     | Description                         | Required |
|--------------------|----------|-------------------------------------|----------|
| fullname.firstname | string   | Captain's first name (min 3 chars)  | Yes      |
| fullname.lastname  | string   | Captain's last name                 | No       |
| email             | string   | Captain's email address             | Yes      |
| password          | string   | Captain's password (min 6 chars)    | Yes      |
| vehicle.vehicleType| string   | Type of vehicle (car/motorcycle/auto)| Yes      |
| vehicle.color     | string   | Vehicle color (min 3 chars)         | Yes      |
| vehicle.plate     | string   | Vehicle plate number                | Yes      |
| vehicle.capacity  | number   | Vehicle passenger capacity (min 1)   | Yes      |

### Response Status Codes
| Status Code | Description                                    |
|-------------|------------------------------------------------|
| 201         | Captain successfully registered                 |
| 400         | Bad Request - Invalid input data               |
| 400         | Bad Request - Captain already exists           |
| 500         | Internal Server Error                          |

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "vehicle": {
    "vehicleType": "car",
    "color": "black",
    "plate": "ABC123",
    "capacity": 4
  }
}
```

### Example Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "_id": "captain_id"
  }
}
```

### Example Error Response
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

# Captain Login API Documentation

## Description
Endpoint for captain authentication and login.

### Endpoint
```
POST /captains/login
```

### Request Body
| Field     | Type   | Description             | Required |
|-----------|--------|-------------------------|----------|
| email     | string | Captain's email address | Yes      |
| password  | string | Captain's password      | Yes      |

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
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "_id": "captain_id"
  }
}
```

### Example Error Response
```json
{
  "message": "Invalid email or password"
}
```

---

# Captain Profile API Documentation

## Description
Endpoint to get the current captain's profile information.

### Endpoint
```
GET /captains/profile
```

### Headers
| Field          | Value                            | Required |
|----------------|----------------------------------|----------|
| Authorization  | Bearer {token}                   | Yes      |

### Response Status Codes
| Status Code | Description                      |
|-------------|----------------------------------|
| 200         | Success                          |
| 401         | Unauthorized - Invalid token     |
| 500         | Internal Server Error            |

### Example Success Response
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  },
  "status": "inactive",
  "_id": "captain_id"
}
```

### Example Error Response
```json
{
  "message": "Unauthorized"
}
```

---

# Captain Logout API Documentation

## Description
Endpoint to logout the current captain and invalidate their token.

### Endpoint
```
GET /captains/logout
```

### Headers
| Field          | Value                            | Required |
|----------------|----------------------------------|----------|
| Authorization  | Bearer {token}                   | Yes      |

### Response Status Codes
| Status Code | Description                      |
|-------------|----------------------------------|
| 200         | Successfully logged out          |
| 401         | Unauthorized - Invalid token     |
| 500         | Internal Server Error            |

### Example Success Response
```json
{
  "message": "Captain Logged Out Successfully"
}
```

### Example Error Response
```json
{
  "message": "Unauthorized"
}
```
