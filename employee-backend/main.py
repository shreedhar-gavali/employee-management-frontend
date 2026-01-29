from fastapi import FastAPI, HTTPException
from database import get_connection
from models import EmployeeCreate
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React runs here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Employee Management API running"}


@app.post("/employees")
def create_employee(employee: EmployeeCreate):
    try:
        conn = get_connection()
        cursor = conn.cursor()

        query = """
        INSERT INTO employees
        (first_name, last_name, job_profile, date_of_birth, salary, contact_number, job_location)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        """

        values = (
            employee.first_name,
            employee.last_name,
            employee.job_profile,
            employee.date_of_birth,
            employee.salary,
            employee.contact_number,
            employee.job_location
        )

        cursor.execute(query, values)
        conn.commit()

        cursor.close()
        conn.close()

        return {"message": "Employee added successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/employees")
def get_employees():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT * FROM employees")
    result = cursor.fetchall()

    cursor.close()
    conn.close()

    return result


  
