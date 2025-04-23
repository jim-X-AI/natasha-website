import os
import subprocess
import sys
from pathlib import Path


def check_node_installed():
    """Check if Node.js is installed by looking for node.exe in common locations."""
    # First try the standard PATH lookup
    try:
        subprocess.run(["node", "--version"], capture_output=True, check=True)
        subprocess.run(["npm", "--version"], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        pass

    # If not found, check common Windows installation paths
    common_paths = [
        r"C:\Program Files\nodejs",
        r"C:\Program Files (x86)\nodejs",
        os.path.expandvars(r"%APPDATA%\npm")
    ]

    for path in common_paths:
        node_path = os.path.join(path, "node.exe")
        if os.path.exists(node_path):
            # Add to PATH temporarily
            os.environ["PATH"] += os.pathsep + path
            try:
                subprocess.run(["node", "--version"], capture_output=True, check=True)
                subprocess.run(["npm", "--version"], capture_output=True, check=True)
                return True
            except (subprocess.CalledProcessError, FileNotFoundError):
                continue
    return False


def check_prerequisites():
    """Check if required tools are installed and available."""
    checks = {
        'node': check_node_installed,
        'python': lambda: subprocess.run(["python", "--version"], capture_output=True, check=True),
        'git': lambda: subprocess.run(["git", "--version"], capture_output=True, check=True)
    }

    missing = []
    for tool, check in checks.items():
        try:
            if not check():
                missing.append(tool)
        except (subprocess.CalledProcessError, FileNotFoundError):
            missing.append(tool)

    if missing:
        print(f"Error: The following prerequisites are missing: {', '.join(missing)}")
        if 'node' in missing:
            print("Node.js appears to be installed but not detected. Trying to continue anyway...")
            # We'll continue but the client setup might fail
        else:
            print("Please install them before running this script:")
            if 'python' in missing:
                print(" - Python: https://www.python.org/downloads/")
            if 'git' in missing:
                print(" - Git: https://git-scm.com/downloads")
            if 'node' in missing:
                print(" - Node.js: https://nodejs.org/ (includes npm)")
            sys.exit(1)


def run_command(cmd, cwd=None):
    """Run a command with error handling."""
    if isinstance(cmd, str):
        # For Windows, we should use the string version with shell=True
        use_shell = True
    else:
        # For non-Windows or when we need specific argument handling
        use_shell = os.name == 'nt'

    try:
        result = subprocess.run(cmd, cwd=cwd, check=True, shell=use_shell)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Command failed: {' '.join(cmd) if isinstance(cmd, list) else cmd}")
        print(f"Error: {e}")
        return False
    except FileNotFoundError as e:
        print(f"Command not found: {' '.join(cmd) if isinstance(cmd, list) else cmd}")
        print(f"Error: {e}")
        return False


# ... [rest of the script remains the same, starting from create_project() through to the end] ...


def create_project():
    """Main function to create the project structure."""
    check_prerequisites()

    # Create root directory
    project_name = "tashas-collection"
    os.makedirs(project_name, exist_ok=True)
    os.chdir(project_name)

    print(f"\nCreating project '{project_name}'...")

    # Initialize git repository
    print("\nInitializing git repository...")
    if not run_command("git init"):
        print("Warning: Git repository initialization failed")

    # Create .gitignore
    print("\nCreating .gitignore...")
    gitignore_content = """# Node
node_modules/
dist/
.env

# Python
__pycache__/
*.pyc
*.pyo
*.pyd
venv/
.env

# Database
*.sqlite3

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
"""
    with open(".gitignore", "w") as f:
        f.write(gitignore_content)

    # Create client folder structure
    create_client()

    # Create server folder structure
    create_server()

    print(f"\nProject '{project_name}' setup complete!")
    print("\nNext steps:")
    print("1. cd into the project directory")
    print("2. Set up your PostgreSQL database")
    print("3. Configure your .env file in the server directory")
    print("4. For the backend:")
    print("   - cd server")
    print("   - python -m venv venv")
    print("   - venv\\Scripts\\activate (Windows) or source venv/bin/activate (Mac/Linux)")
    print("   - pip install -r requirements.txt")
    print("5. For the frontend:")
    print("   - cd client")
    print("   - npm install")
    print("   - npm run dev")


def create_client():
    """Create the React client application."""
    print("\nSetting up client (React)...")

    # Create client directory
    os.makedirs("client", exist_ok=True)

    # Initialize React app with Vite
    print("Creating Vite React app...")
    if not run_command("npm create vite@latest client -- --template react"):
        print("Error: Failed to create Vite app")
        return

    # Install client dependencies
    print("Installing client dependencies...")
    os.chdir("client")
    dependencies = [
        "tailwindcss",
        "axios",
        "react-router-dom",
        "react-icons",
        "autoprefixer",
        "postcss"
    ]
    if not run_command(f"npm install {' '.join(dependencies)}"):
        print("Error: Failed to install client dependencies")
        os.chdir("..")
        return

    # Initialize Tailwind CSS
    print("Initializing Tailwind CSS...")
    if not run_command("npx tailwindcss init -p"):
        print("Warning: Tailwind CSS initialization failed")

    # Create Tailwind config
    tailwind_config = """/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        dark: '#292F36',
        light: '#F7FFF7'
      },
    },
  },
  plugins: [],
}
"""
    with open("tailwind.config.js", "w") as f:
        f.write(tailwind_config)

    os.chdir("..")


def create_server():
    """Create the Flask server application."""
    print("\nSetting up server (Flask)...")

    # Create server directory structure
    os.makedirs("server", exist_ok=True)

    # Create requirements.txt
    requirements = """Flask==2.3.2
Flask-SQLAlchemy==3.0.3
Flask-Cors==3.0.10
psycopg2-binary==2.9.10
python-dotenv==1.0.0
"""
    with open("server/requirements.txt", "w") as f:
        f.write(requirements)

    # Create app.py
    app_py = """from flask import Flask, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

@app.route('/')
def home():
    return jsonify({"message": "Welcome to Tasha's Collection API"})

if __name__ == '__main__':
    app.run(debug=True)
"""
    with open("server/app.py", "w") as f:
        f.write(app_py)

    # Create empty models.py
    Path("server/models.py").touch()

    # Create empty .env file
    Path("server/.env").touch()

    # Create database schema file
    schema_sql = """-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(128) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    zip_code VARCHAR(20),
    country VARCHAR(50),
    phone VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('accessories', 'skincare', 'shoes')),
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    image_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
    payment_method VARCHAR(50),
    shipping_address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Order items table
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
    quantity INTEGER NOT NULL,
    price_at_purchase DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Reviews table
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
"""
    with open("server/schema.sql", "w") as f:
        f.write(schema_sql)


if __name__ == "__main__":
    create_project()