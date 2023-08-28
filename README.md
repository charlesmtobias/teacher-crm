# Teacher CRM

This project is a calendar management system for the teachers of a music studio to schedule lessons, view calendars, register students for recitals, organize recitals, and generate programs for recitals. In this version, there are no user permissions. Everyone will have access to everything. The only restraint is the creation, deletion, and editing of events will be limited to just that user.

## Features
### Dashboard
- Today's Lessons
- Resources
  - A File Browser which holds commonly used teacher files. Root folders could include Guitar, Piano, Drums, Voice, Camps, etc.
  - Ability to CRUD these files including to print
- Substitute Listings
  - Teachers may mark lessons as needing a substitue
  - Lessons needing substitutes are displayed on the Sub Board and can be accepted by teachers
- Recital
  - "The recital is in x weeks"
  - "You have x students in the recital"
  - "Your recital times are 1:00, 3:30, 5:00"
  - "Manage" Button

### Calendar
- Personal Calendar
  - Shows only your lessons and events
- Master Calendar
  - Shows all lessons and events
- Event Crud
- Calendar Guidelines
  - Semester start, end, and holidays to automatically generate weekly lessons

### Recital
- Ability to have multiple recitals
- Add students to recital
- Assign songs w/ composer to students
- Create recital times
- Assign students to recitals
- Generate programs based on student assignments
