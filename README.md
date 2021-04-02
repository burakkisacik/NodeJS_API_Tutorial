# DevCamper API

> This repository created by following the udemy course of Brad Traversy

This repository created by following the udemy course of Brad Traversy
Backend API for the DevCamper application to manage bootcamps, courses, reviews, users and authentication

## Usage

> Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

### Install Dependencies

```
npm install
```

### Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

### Version : 1.0.0

## Indices

- [Authentication](#authentication)

  - [Forgot Password](#1-forgot-password)
  - [Get logged in user via Token](#2-get-logged-in-user-via-token)
  - [Login User](#3-login-user)
  - [Logout User](#4-logout-user)
  - [Register User](#5-register-user)
  - [Reset password](#6-reset-password)
  - [Update User Detail](#7-update-user-detail)
  - [Update User Password](#8-update-user-password)

- [Bootcamps](#bootcamps)

  - [Create New Bootcamp](#1-create-new-bootcamp)
  - [Delete Single Bootcamp](#2-delete-single-bootcamp)
  - [Get All Bootcamps](#3-get-all-bootcamps)
  - [Get Bootcamps By Distance](#4-get-bootcamps-by-distance)
  - [Get Single Bootcamps](#5-get-single-bootcamps)
  - [Update Single Bootcamp](#6-update-single-bootcamp)
  - [Upload Photo](#7-upload-photo)

- [Courses](#courses)

  - [Create Bootcamp Course](#1-create-bootcamp-course)
  - [Delete Course](#2-delete-course)
  - [Get A SingleCourses](#3-get-a-singlecourses)
  - [Get All Courses](#4-get-all-courses)
  - [Get Courses For Bootcamp](#5-get-courses-for-bootcamp)
  - [Update Course](#6-update-course)

- [Reviews](#reviews)

  - [Add Review For Bootcamp](#1-add-review-for-bootcamp)
  - [Delete Review](#2-delete-review)
  - [Get All Reviews](#3-get-all-reviews)
  - [Get Reviews for Bootcamp](#4-get-reviews-for-bootcamp)
  - [Get Single Review](#5-get-single-review)
  - [Update Review](#6-update-review)

- [Users](#users)

  - [Create A User](#1-create-a-user)
  - [Delete User](#2-delete-user)
  - [Get A Single User](#3-get-a-single-user)
  - [Get All Users](#4-get-all-users)
  - [Update User](#5-update-user)

---

## Authentication

Routes for user auth including register, login, reset password etc..

### 1. Forgot Password

Generate password token and send email

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotpassword
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "email" : "john@gmail.com"
}
```

### 2. Get logged in user via Token

**_Endpoint:_**

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/me
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

### 3. Login User

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "email" : "admin@gmail.com",
    "password" : "123456"
}
```

### 4. Logout User

Clear token cookie

**_Endpoint:_**

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/logout
```

### 5. Register User

Add user to databse with encrypted passwprd

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/register
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "name" : "buso",
    "email" : "buso@gmail.com",
    "password" : "200894",
    "role" : "publisher"

}
```

### 6. Reset password

Reset user password using token

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/resetpassword/ff63ccc761d4079227b3515b3d3a079a81c0defc
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "password" : "12345678"
}
```

### 7. Update User Detail

Update the user email and name

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatedetails
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "email" : "busokisa@gmail.com",
    "name" : "John Smith"
}
```

### 8. Update User Password

Update logged in user password, send in the body currentPassword and newPassword

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatepassword
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "currentPassword" : "200894",
    "newPassword" : "123456789"
}
```

## Bootcamps

Bootcamps CRUD functionality

### 1. Create New Bootcamp

Add new bootcamp to the database. Must be authenticated and must be publisher or admin

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "name": "Devworks Bootcamp",
    "description": "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
    "website": "https://devworks.com",
    "phone": "(111) 111-1111",
    "email": "enroll@devworks.com",
    "address": "233 Bay State Rd Boston MA 02215",
    "careers": ["Web Development", "UI/UX", "Business"],
    "housing": true,
    "jobAssistance": true,
    "jobGuarantee": false,
    "acceptGi": true
}
```

### 2. Delete Single Bootcamp

Delete single bootcamp from database

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788
```

### 3. Get All Bootcamps

Fetch all bootcamps from database. Includes pagination, filtering, etc

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps
```

### 4. Get Bootcamps By Distance

Get bootcamps within a radius of a spesific zipcode

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/radius/02118/10
```

### 5. Get Single Bootcamps

Get single bootcamp by id

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/5d713a66ec8f2b88b8f830b8
```

### 6. Update Single Bootcamp

Update single bootcamp in database

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "housing" : true
}
```

### 7. Upload Photo

Route to upload a bootcamp photo

**_Endpoint:_**

```bash
Method: PUT
Type: FORMDATA
URL: {{URL}}/api/v1/bootcamps/5d713a66ec8f2b88b8f830b8/photo
```

**_Body:_**

| Key  | Value | Description |
| ---- | ----- | ----------- |
| file |       |             |

## Courses

Create, read, update and delete courses

### 1. Create Bootcamp Course

Create a course for specific bootcamp

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d713a66ec8f2b88b8f830b8/courses
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "title" : "Front End Web Developmnet",
    "description": "This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue",
    "weeks": 8,
    "tuition": 8000,
    "minimumSkill": "beginner",
    "scholarshipsAvailable": true
}
```

### 2. Delete Course

Delete single course drom database by id

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/courses/5d725c84c4ded7bcb480eaa0
```

### 3. Get A SingleCourses

Get a single course by id

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```

### 4. Get All Courses

Get all courses in database

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/courses
```

### 5. Get Courses For Bootcamp

Get the specific courses for a bootcamp

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/5d713995b721c3bb38c1f5d0/courses
```

### 6. Update Course

Update Course by id

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/courses/5d725c84c4ded7bcb480eaa0
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "tuition" : 13000,
    "minimumSkill": "advanced"
}
```

## Reviews

Manage course reviews

### 1. Add Review For Bootcamp

Insert review for a specific bootcamp

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "title" : "nice bootcamp",
    "text" : "I learned alot",
    "rating" : 8
}
```

### 2. Delete Review

Remove review from database

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/reviews/6065bde9fd6b4b28554abd52
```

### 3. Get All Reviews

Get all reviews from db and populate with bootcamp name and description

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/reviews
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

### 4. Get Reviews for Bootcamp

Fetch the reviews for a specific bootcamp

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```

### 5. Get Single Review

Fetch a review from database by id and populate Bootcamp name and description

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/reviews/5d7a514b5d2c12c7449be020
```

### 6. Update Review

Update review in database

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/reviews/6065bde9fd6b4b28554abd52
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "title" : "helllooooo"
}
```

## Users

CRUD functionality for users: only available for admins

### 1. Create A User

Create A User (admin)

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users/
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "name" : "burak",
    "email" : "burak@gmail.com",
    "password" : "123456"
}
```

### 2. Delete User

Delete User (admin)

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/users/60646f2ecf92b0a250bfad0f
```

### 3. Get A Single User

Get A Single User (admin)

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/users/6064607b8195559571cc8342
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

### 4. Get All Users

Get All Users (admin)

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/users
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

### 5. Update User

Update User (admin)

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/users/60646f2ecf92b0a250bfad0f
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "name" : "burakBey"
}
```

---

[Back to top](#devcamper-api)

> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-04-02 14:15:49 by [docgen](https://github.com/thedevsaddam/docgen)
