# 🛍️ Arden
 📦 Arden is a e-commerce web application designed to provide a seamless shopping experience. This project is divided into two main parts:
 
 1.📱 **Client**: The front-end of the application built using modern web technologies.
 
 2.⚙️ **API**: The back-end of the application powered by Strapi, serving as the content management system and API provider.

---

## 📜 Table of Contents

1️⃣. [✨ Features](#features)

2️⃣. [🛠️ Tech Stack](#tech-stack)

3️⃣. [🚀 Getting Started](#getting-started)

4️⃣. [🔑 Environment Variables](#environment-variables)

5️⃣. [📜 Scripts](#scripts)

6️⃣.  [🤝 Contributing](#contributing)

---

## ✨ Features

- 🔒 User auth & roles :  Secure login and registration system (Currently not added).
- 📱 Responsive design : Optimized for both desktop and mobile devices.
- 🛍️ Product catalog with 🔎 search & 🏷️ filters
- 🛒 Cart system :  Add, remove, and update products in the cart.
- 🗂️ Persistent data via Redux & Redux-Persist
- 🌐 Multi-language 🌍 (Strapi plugin)
- ⚙️ API with 🐬 MySQL

---

## 🛠️ Tech Stack

### **Frontend (Client)**

- ⚛️ [React.js](https://reactjs.org/) (v18)
- 🛣️ [React Router](https://reactrouter.com/) (v6)
- 🎨 [Material-UI](https://mui.com/)
- 🗃️ [Redux Toolkit](https://redux-toolkit.js.org/)
- 🎨 [SASS](https://sass-lang.com/)
- ⚡ [Vite](https://vitejs.dev/)

### **Backend (API)**

- ⚙️ [Strapi CMS](https://strapi.io/) (v4)
- 🐬 MySQL DB
- 🔌 Strapi Plugins:
  - ☁️ Cloud
  - 🌐 i18n
  - 🔒 Users & Permissions

---

## 🚀 Getting Started

### 📋 Prerequisites

- 🖥️ Node.js (v18+)
- 📦 npm (v6+)
- 🐬 MySQL DB

### 📥 Installation

1️⃣ Clone the repo:

 ```bash
   git clone https://github.com/harshify/Arden.git
   cd Arden
   ```

2️⃣ Install 📦 dependencies:

**Client:**

```bash
   cd client
   npm install
```

**API:**

```bash
   cd api
   npm install
```

3️⃣ Set 🛠️ environment variables ([see here](#environment-variables)).

4️⃣ Start 🚀 dev servers:

**Client:**

```bash
   npm run dev
```

**API:**

```bash
   npm run develop
```

   - Ensure that your database (e.g., MySQL) is running and accessible.

   - Configure the database connection in the Strapi configuration files.


5️⃣ Access the app:

- 🌐 **Frontend:** `http://localhost:5173`
- 🔐 **Admin Panel:** `http://localhost:1337/admin`

---

## 🔑 Environment Variables

Create `.env` files in `client` & `api` dirs.

### **Client (.env):**

```env
VITE_API_URL=http://localhost:1337
```

### **API (.env):**

```env
DATABASE_CLIENT=mysql
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=strapi_ecommerce
DATABASE_USERNAME=root
DATABASE_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
API_TOKEN_SALT=your_api_token_salt
APP_KEYS=key1,key2,key3
```

---

## 📜 Scripts

### **Client Scripts:**

- 🛠️ `npm run dev`: Start dev server
- 🏗️ `npm run build`: Build prod
- 🔎 `npm run preview`: Preview build
- ✍️ `npm run lint`: Lint code

### **API Scripts:**

- 🛠️ `npm run develop`: Start Strapi dev server
- 🏗️ `npm run build`: Build Strapi admin panel
- 🚀 `npm run start`: Start Strapi server

  
---

## 🤝 Contributing

Contributions are ❤️ welcome! To contribute:

1️⃣ Fork the repo

2️⃣ Create 🆕 branch (`git checkout -b feature-name`)

3️⃣ Commit changes (`git commit -m '✨ Add feature'`)

4️⃣ Push branch (`git push origin feature-name`)

5️⃣ Open PR

---

💬 Feel free to reach out with questions or suggestions! ✉️

