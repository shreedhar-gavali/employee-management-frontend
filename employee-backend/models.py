from pydantic import BaseModel
from datetime import date

class EmployeeCreate(BaseModel):
    first_name: str
    last_name: str
    job_profile: str
    date_of_birth: date
    salary: float
    contact_number: str
    job_location: str
